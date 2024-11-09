"use client";

import { useAppState } from "@/lib/providers/state-provider";
import { useSupabaseUser } from "@/lib/providers/supabase-user-provider";
import { createFolders } from "@/lib/supabase/queries";
import { Folder } from "@/types/supabase";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import TooltipComponent from "../global/tooltip-component";
import { Accordion } from "../ui/accordion";
import { useToast } from "../ui/use-toast";
import Dropdown from "./drop-down";

type Props = {
  workspaceFolders: Folder[];
  workspaceId: string;
};

function FoldersDropdownList({ workspaceFolders, workspaceId }: Props) {
  const { state, dispatch, folderId } = useAppState();
  const [folders, setFolders] = useState(workspaceFolders);
  const { subscription } = useSupabaseUser();
  const { toast } = useToast();

  useEffect(() => {
    if (workspaceFolders.length > 0) {
      dispatch({
        type: "SET_FOLDERS",
        payload: {
          workspaceId,
          folders: workspaceFolders.map((folder) => ({
            ...folder,
            files:
              state.workspaces
                .find((workspace) => workspace.id === workspaceId)
                ?.folders.find((f) => f.id === folder.id)?.files || [],
          })),
        },
      });
    }
  }, [workspaceFolders, workspaceId]);

  useEffect(() => {
    setFolders(
      state.workspaces.find((workspace) => workspace.id === workspaceId)
        ?.folders || []
    );
  }, [state]);

  const addFolderHandler = async () => {
    /* if (folders.length >= 3 && !subscription) {

    } */

    const newFolders: Folder = {
      data: null,
      id: v4(),
      created_at: new Date().toISOString(),
      title: "Untitled",
      icon_id: "📄",
      in_trash: null,
      workspace_id: workspaceId,
      banner_url: "",
    };
    dispatch({
      type: "ADD_FOLDER",
      payload: { workspaceId, folder: { ...newFolders, files: [] } },
    });

    const { data, error } = await createFolders(newFolders);

    if (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Could not create the folder",
      });
    } else {
      toast({
        title: "Success",
        description: "Created folder.",
      });
    }
  };

  return (
    <>
      <div className="flex sticky z-20 top-0 bg-background w-full h-10 group/title justify-between items-center pr-4 text-Neutrals/neutrals-8">
        <span className="text-Neutrals-8 font-bold text-xs">FOLDERS </span>
        <TooltipComponent message="Create Folder">
          <PlusIcon
            onClick={addFolderHandler}
            size={16}
            className="group-hover/title:inline-block hidden cursor-pointer hover:dark:text-white"
          />
        </TooltipComponent>
      </div>
      <Accordion
        type="multiple"
        defaultValue={[folderId || ""]}
        className="pb-20"
      >
        {folders
          .filter((folder) => !folder.in_trash)
          .map((folder) => (
            <Dropdown
              key={folder.id}
              title={folder.title}
              listType="folder"
              id={folder.id}
              iconId={folder.icon_id}
            />
          ))}
      </Accordion>
    </>
  );
}

export default FoldersDropdownList;
