"use client";

import { useAppState } from "@/lib/providers/state-provider";
import { useSupabaseUser } from "@/lib/providers/supabase-user-provider";
import { createFile, updateFile, updateFolders } from "@/lib/supabase/queries";
import { File } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import clsx from "clsx";
import { PlusIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { v4 } from "uuid";
import EmojiPicker from "../global/emoji-picker";
import TooltipComponent from "../global/tooltip-component";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useToast } from "../ui/use-toast";

type Props = {
  title: string;
  id: string;
  listType: "folder" | "file";
  iconId: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

function Dropdown({
  iconId,
  id,
  listType,
  title,
  children,
  disabled,
  ...props
}: Props) {
  const supabase = createClientComponentClient();
  const { user } = useSupabaseUser();
  const { state, dispatch, workspaceId, folderId } = useAppState();
  const [isEditing, setISEditing] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const folderTitle: string | undefined = useMemo(() => {
    if (listType === "folder") {
      const stateTittle = state.workspaces
        .find((workspace) => workspace.id === workspaceId)
        ?.folders.find((folder) => folder.id === id)?.title;

      if (title === stateTittle || !stateTittle) return title;

      return stateTittle;
    }
  }, [state, listType, workspaceId, id, title]);

  const fileTitle: string | undefined = useMemo(() => {
    if (listType == "file") {
      const fileAndFoldersId = id.split("folders");
      const stateTitle = state.workspaces
        .find((workspace) => workspace.id === workspaceId)
        ?.folders.find((folder) => folder.id === fileAndFoldersId[0])
        ?.files.find((file) => file.id === fileAndFoldersId[1])?.title;

      if (title === stateTitle || !stateTitle) return title;

      return stateTitle;
    }
  }, [state, listType, workspaceId, id, title]);

  const navigatePage = (accordingId: string, type: string) => {
    if (type === "folder") {
      router.push(`/dashboard/${workspaceId}/${accordingId}`);
    }

    if (type === "file") {
      router.push(
        `/dashboard/${workspaceId}/${folderId}/${
          accordingId.split("folder")[1]
        }`
      );
    }
  };

  const handleDoubleClick = () => {
    setISEditing(true);
  };

  const handleBlur = async () => {
    if (!isEditing) return;

    setISEditing(false);

    const fId = id.split("folder");

    if (fId?.length === 1) {
      if (!folderTitle) return;
      toast({
        title: "Success",
        description: "Folder title changed.",
      });
      await updateFolders({ title }, fId[0]);
    }

    if (fId.length === 2 && fId[1]) {
      if (!fileTitle) return;

      const { data, error } = await updateFile({ title }, fId[1]);
      if (error) {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Could not update the Title for this file",
        });
      } else {
        toast({
          title: "Success",
          description: "Update Title for the file",
        });
      }
    }
  };

  const onChangeEmoji = async (selectedEmoji: string) => {
    if (!workspaceId || !folderId) return;
    const fid = id.split("folder");

    if (listType === "folder") {
      dispatch({
        type: "UPDATE_FOLDER",
        payload: {
          workspaceId,
          folderId: id,
          folder: { icon_id: selectedEmoji },
        },
      });

      const { data, error } = await updateFolders(
        { icon_id: selectedEmoji },
        id
      );
      if (error) {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Could not update the emoji for this folder",
        });
      } else {
        toast({
          title: "Success",
          description: "Update emoji for the folder",
        });
      }
    }

    if (listType === "file") {
      dispatch({
        type: "UPDATE_FILE",
        payload: {
          file: { icon_id: selectedEmoji },
          folderId: folderId,
          workspaceId,
          fileId: fid[1],
        },
      });

      const { data, error } = await updateFile(
        { icon_id: selectedEmoji },
        fid[1]
      );
      if (error) {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Could not update the emoji for this folder",
        });
      } else {
        toast({
          title: "Success",
          description: "Update emoji for the folder",
        });
      }
    }
  };

  const folderTitleChange = (e: any) => {
    if (!workspaceId) return;

    const fid = id.split("folder");

    if (fid.length === 1) {
      dispatch({
        type: "UPDATE_FOLDER",
        payload: {
          folder: { title: e.target.value },
          folderId: fid[0],
          workspaceId,
        },
      });
    }
  };

  const fileTitleChange = (e: any) => {
    if (!folderId || !workspaceId) return;

    const fid = id.split("folder");

    if (fid.length == 2 && fid[1]) {
      dispatch({
        type: "UPDATE_FILE",
        payload: {
          file: { title: e.target.value },
          folderId,
          workspaceId,
          fileId: fid[1],
        },
      });
    }
  };

  const moveToTrash = async () => {
    if (!user?.email || !workspaceId) return;

    const pathId = id.split("folder");

    if (listType === "folder") {
      dispatch({
        type: "UPDATE_FOLDER",
        payload: {
          folder: { in_trash: `Deleted by ${user?.email}` },
          folderId: pathId[0],
          workspaceId,
        },
      });

      const { data, error } = await updateFolders(
        { in_trash: `Deleted by ${user?.email}` },
        pathId[0]
      );

      if (error) {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Could not Delete Folder",
        });
      } else {
        toast({
          title: "Success",
          description: "Moved Folder Trash",
        });
      }
    }

    if (listType == "file") {
      dispatch({
        type: "UPDATE_FILE",
        payload: {
          file: { in_trash: `Deleted by ${user?.email}` },
          folderId: pathId[0],
          workspaceId,
          fileId: pathId[1],
        },
      });

      const { data, error } = await updateFile(
        { in_trash: `Deleted by ${user?.email}` },
        pathId[1]
      );

      if (error) {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Could not Delete File",
        });
      } else {
        toast({
          title: "Success",
          description: "Moved File Trash",
        });
      }
    }
  };

  const isFolder = listType === "folder";

  const listStyles = useMemo(
    () =>
      clsx("relative", {
        "border-none text-md": isFolder,
        "border-none ml-6 text-[16px] py-1": !isFolder,
      }),
    [isFolder]
  );
  const groupIdentifies = clsx(
    "dark:text-white whitespace-nowrap flex justify-between items-center w-full relative",
    {
      "group/folder": isFolder,
      "group/file": !isFolder,
    }
  );

  const hoverStyles = useMemo(
    () =>
      clsx(
        "h-full hidden rounded-sm absolute right-0 items-center justify-center",
        {
          "group-hover/file:block": listType === "file",
          "group-hover/folder:block": listType === "folder",
        }
      ),
    [isFolder]
  );

  const addNewFile = async () => {
    if (!workspaceId) return;

    const newFile: File = {
      folder_id: id,
      data: null,
      created_at: new Date().toISOString(),
      in_trash: null,
      title: "Untitled",
      icon_id: "📄",
      id: v4(),
      workspace_id: workspaceId,
      banner_url: "",
    };
    dispatch({
      type: "ADD_FILE",
      payload: { file: newFile, folderId: id, workspaceId },
    });
    const { data, error } = await createFile(newFile);
    if (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Could not create a file",
      });
    } else {
      toast({
        title: "Success",
        description: "File created.",
      });
    }
  };

  return (
    <AccordionItem
      value={id}
      className={listStyles}
      onClick={(e) => {
        e.stopPropagation();
        navigatePage(id, listType);
      }}
    >
      <AccordionTrigger
        id={listType}
        className="hover:no-underline p-2 dark:text-muted-foreground text-sm"
        disabled={listType === "file"}
      >
        <div className={groupIdentifies}>
          <div className="flex gap-4 items-center justify-center overflow-hidden">
            <div className="relative">
              <EmojiPicker getValue={onChangeEmoji}>{iconId}</EmojiPicker>
            </div>
            <input
              type="text"
              value={listType == "folder" ? folderTitle : fileTitle}
              className={clsx(
                "outline-none overflow-hidden w-[140px] text-Neutrals/neutrals-7",
                {
                  "bg-muted cursor-text": isEditing,
                  "bg-transparent cursor-pointer": !isEditing,
                }
              )}
              readOnly={!isEditing}
              onDoubleClick={handleDoubleClick}
              onBlur={handleBlur}
              onChange={
                listType === "folder" ? folderTitleChange : fileTitleChange
              }
            />
          </div>
          <div className={hoverStyles}>
            <TooltipComponent message="Delete Folder">
              <Trash
                onClick={moveToTrash}
                size={15}
                className="hover:dark:text-white dark:text-Neutrals/neutrals-7 transition-colors"
              />
            </TooltipComponent>
            {listType === "folder" && !isEditing && (
              <>
                <TooltipComponent message="Add File">
                  <PlusIcon
                    onClick={addNewFile}
                    size={15}
                    className="hover:dark:text-white dark:text-Neutrals/neutrals-7 transition-colors"
                  />
                </TooltipComponent>
              </>
            )}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {state.workspaces
          .find((workspace) => workspace.id === workspaceId)
          ?.folders.find((folder) => folder.id === id)
          ?.files.filter((file) => !file.in_trash)
          .map((file) => {
            const customFileId = `${id}folder${file.id}`;
            return (
              <Dropdown
                key={file.id}
                title={file.title}
                listType="file"
                id={customFileId}
                iconId={file.icon_id}
              />
            );
          })}
      </AccordionContent>
    </AccordionItem>
  );
}

export default Dropdown;
