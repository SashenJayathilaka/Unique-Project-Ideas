"use server";

import { files, folders, users, workspaces } from "@/migrations/schema";
import { File, Folder, Subscription, User, workspace } from "@/types/supabase";
import { and, eq, ilike, notExists } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { validate } from "uuid";
import db from "./db";
import { collaborators } from "./schema";
import { error } from "console";

export const createWorkspace = async (workspace: workspace) => {
  try {
    const response = await db.insert(workspaces).values(workspace);
    return { data: null, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};

export const deleteWorkspace = async (workspaceId: string) => {
  if (!workspaceId) return;

  await db.delete(workspaces).where(eq(workspaces.id, workspaceId));
};

export const getUserSubscriptionStatus = async (userId: string) => {
  try {
    const data = await db.query.subscriptions.findFirst({
      where: (s, { eq }) => eq(s.user_id, userId),
    });

    if (data) return { data: data as Subscription, error: null };
    else {
      return {
        data: null,
        error: null,
      };
    }
  } catch (error) {
    console.log("🚀 ~ getUserSubscriptionStatus ~ error:", error);
    return {
      data: null,
      error: `Error ${error}`,
    };
  }
};

export const getFileDetails = async (fileId: string) => {
  const isValid = validate(fileId);
  if (!isValid) {
    data: null;
    error: "Error";
  }

  try {
    const results = (await db
      .select()
      .from(files)
      .where(eq(files.id, fileId))
      .limit(1)) as File[];

    return { data: results, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};

export const getFiles = async (folderId: string) => {
  const isValid = validate(folderId);
  if (!isValid) return { data: null, error: "Error" };
  try {
    const results = (await db
      .select()
      .from(files)
      .orderBy(files.created_at)
      .where(eq(files.folder_id, folderId))) as File[] | [];
    return { data: results, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};

export const deleteFile = async (fileId: string) => {
  if (!fileId) return;

  await db.delete(files).where(eq(files.id, fileId));
};

export const deleteFolder = async (folderId: string) => {
  if (!folderId) return;

  await db.delete(folders).where(eq(folders.id, folderId));
};

export const getFoldersDetails = async (folderId: string) => {
  const isValid = validate(folderId);

  if (!isValid) {
    data: null;
    error: "Error";
  }

  try {
    const result = (await db
      .select()
      .from(folders)
      .where(eq(folders.id, folderId))
      .limit(1)) as Folder[];

    return { data: result, error: null };
  } catch (error: any) {
    return { data: null, error: "🧑‍💻 Error" };
  }
};

export const getFolders = async (workspace_id: string) => {
  const isValid = validate(workspace_id);

  if (!isValid)
    return {
      data: null,
      error: "Error",
    };

  try {
    const result: Folder[] | [] = await db
      .select()
      .from(folders)
      .orderBy(folders.created_at)
      .where(eq(folders.workspace_id, workspace_id));

    return { data: result, error: null };
  } catch (error: any) {
    return { data: null, error: "🧑‍💻 Error" };
  }
};

export const getPrivateWorkspaces = async (userId: string) => {
  if (!userId) return [];

  const privateWorkspace = (await db
    .select({
      id: workspaces.id,
      createdAt: workspaces.created_at,
      workspaceOwner: workspaces.workspace_owner,
      title: workspaces.title,
      iconId: workspaces.icon_id,
      data: workspaces.data,
      inTrash: workspaces.in_trash,
      logo: workspaces.logo,
      bannerUrl: workspaces.banner_url,
    })
    .from(workspaces)
    .where(
      and(
        notExists(
          db
            .select()
            .from(collaborators)
            .where(eq(collaborators.workspacesId, workspaces.id))
        ),
        eq(workspaces.workspace_owner, userId)
      )
    )) as unknown as workspace[];
  return privateWorkspace;
};

export const getCollaboratingWorkspace = async (userId: string) => {
  if (!userId) return [];

  const collaboratedWorkspaces = (await db
    .select({
      id: workspaces.id,
      createdAt: workspaces.created_at,
      workspaceOwner: workspaces.workspace_owner,
      title: workspaces.title,
      iconId: workspaces.icon_id,
      data: workspaces.data,
      inTrash: workspaces.in_trash,
      logo: workspaces.logo,
      //bannerUrl: workspaces.banner_url,
    })
    .from(users)
    .innerJoin(collaborators, eq(users.id, collaborators.userId))
    .innerJoin(workspaces, eq(collaborators.workspacesId, workspaces.id))
    .where(eq(users.id, userId))) as unknown as workspace[];
  return collaboratedWorkspaces;
};

export const getShareWorkspaces = async (userId: string) => {
  if (!userId) return [];

  const sharedWorkspaces = (await db
    .selectDistinct({
      id: workspaces.id,
      createdAt: workspaces.created_at,
      workspaceOwner: workspaces.workspace_owner,
      title: workspaces.title,
      iconId: workspaces.icon_id,
      data: workspaces.data,
      inTrash: workspaces.in_trash,
      logo: workspaces.logo,
      bannerUrl: workspaces.banner_url,
    })
    .from(workspaces)
    .orderBy(workspaces.created_at)
    .innerJoin(collaborators, eq(workspaces.id, collaborators.workspacesId))
    .where(eq(workspaces.workspace_owner, userId))) as unknown as workspace[];
  return sharedWorkspaces;
};

export const getShareWorkspacesDetails = async (workspaceId: string) => {
  const isValid = validate(workspaceId);

  if (!isValid) return { data: [], error: "Error" };

  try {
    const response = (await db
      .select()
      .from(workspaces)
      .where(eq(workspaces.id, workspaceId))
      .limit(1)) as workspace[];

    return { data: response, error: null };
  } catch (error) {
    console.log("🚀 ~ getShareWorkspacesDetails ~ error:", error);
    return { data: null, error: "getShareWorkspacesDetails ~ error" };
  }
};

export const addCollaborators = async (users: User[], workspaceId: string) => {
  const response = users.forEach(async (user: User) => {
    const userExists = await db.query.collaborators.findFirst({
      where: (u, { eq }) =>
        and(eq(u.user_id, user.id), eq(u.workspace_id, workspaceId)),
    });
    if (!userExists)
      await db.insert(collaborators).values({
        workspacesId: workspaceId,
        userId: user.id,
      });
  });
};

export const removeCollaborators = async (
  users: User[],
  workspaceId: string
) => {
  const response = users.forEach(async (user: User) => {
    const userExists = await db.query.collaborators.findFirst({
      where: (u, { eq }) =>
        and(eq(u.user_id, user.id), eq(u.workspace_id, workspaceId)),
    });
    if (userExists)
      await db
        .delete(collaborators)
        .where(
          and(
            eq(collaborators.workspacesId, workspaceId),
            eq(collaborators.userId, user.id)
          )
        );
  });
};

export const createFolders = async (folder: Folder) => {
  try {
    const result = await db.insert(folders).values(folder);
    return { data: null, error: null };
  } catch (error) {
    console.log("🚀 ~ createFolders ~ error:", error);
    return { data: null, error: "error" };
  }
};

export const createFile = async (file: File) => {
  try {
    await db.insert(files).values(file);
    return { data: null, error: null };
  } catch (error) {
    console.log("🚀 ~ createFile ~ error:", error);
    return { data: null, error: "createFile ~ error" };
  }
};

export const updateFolders = async (
  folder: Partial<Folder>,
  folderId: string
) => {
  try {
    await db.update(folders).set(folder).where(eq(folders.id, folderId));
    return { data: null, error: null };
  } catch (error) {
    console.log("🚀 ~ updateFolders ~ error:", error);
    return { data: null, error: "Error" };
  }
};

export const updateFile = async (file: Partial<File>, fileId: string) => {
  try {
    const response = await db
      .update(files)
      .set(file)
      .where(eq(files.id, fileId));
    return { data: null, error: null };
  } catch (error) {
    console.log("🚀 ~ updateFile ~ error:", error);
    return { data: null, error: "updateFile ~ error" };
  }
};

export const updateWorkspace = async (
  workspace: Partial<workspace>,
  workspaceId: string
) => {
  if (!workspaceId) return;

  try {
    await db
      .update(workspaces)
      .set(workspace)
      .where(eq(workspaces.id, workspaceId));

    revalidatePath(`dashboard/${workspaceId}`);
    return { data: null, error: null };
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return { data: null, error: "Error" };
  }
};

export const getUsersFromSearch = async (email: string) => {
  if (!email) return [];

  const account = db
    .select()
    .from(users)
    .where(ilike(users.email, `${email}%`));

  return account;
};
