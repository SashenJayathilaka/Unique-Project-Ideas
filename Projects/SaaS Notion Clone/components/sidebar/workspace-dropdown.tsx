"use client";

import { useAppState } from "@/lib/providers/state-provider";
import { workspace } from "@/types/supabase";
import { useEffect, useState } from "react";
import CustomDialogTrigger from "../global/custom-dialog-trigger";
import WorkspaceCreator from "../global/workspace-creator";
import SelectedWorkspace from "./selected-workspace";

type Props = {
  privateWorkspaces: workspace[] | [];
  sharedWorkspaces: workspace[] | [];
  collaboratingWorkspaces: workspace[] | [];
  defaultValue: workspace | undefined;
};

function WorkspaceDropdown({
  collaboratingWorkspaces,
  defaultValue,
  privateWorkspaces,
  sharedWorkspaces,
}: Props) {
  const { dispatch, state } = useAppState();
  const [selectOption, setSelectOption] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!state.workspaces.length) {
      dispatch({
        type: "SET_WORKSPACES",
        payload: {
          workspaces: [
            ...privateWorkspaces,
            ...sharedWorkspaces,
            ...collaboratingWorkspaces,
          ].map((workspace) => ({ ...workspace, folders: [] })),
        },
      });
    }
  }, [privateWorkspaces, collaboratingWorkspaces, sharedWorkspaces]);

  const handleSelect = (option: workspace) => {
    setSelectOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const findSelectWorkspaces = state.workspaces.find(
      (workspace) => workspace.id === defaultValue?.id
    );

    if (findSelectWorkspaces) setSelectOption(findSelectWorkspaces);
  }, [state, defaultValue]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span onClick={() => setIsOpen(!isOpen)}>
          {selectOption ? (
            <SelectedWorkspace workspace={selectOption} />
          ) : (
            "Select a workspace"
          )}
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute w-full rounded-md shadow-md z-50 h-[190px] bg-black/10 backdrop-blur-lg group overflow-scroll border-[1px] border-muted scrollbar-hide">
          <div className="rounded-md flex flex-col">
            <div className="!p-2">
              {!!privateWorkspaces.length && (
                <>
                  <p className="text-muted-foreground">Private</p>
                  <hr />
                  {privateWorkspaces.map((option) => (
                    <SelectedWorkspace
                      key={option.id}
                      workspace={option}
                      onClick={handleSelect}
                    />
                  ))}
                </>
              )}
              {!!sharedWorkspaces.length && (
                <>
                  <p className="text-muted-foreground">Private</p>
                  <hr />
                  {sharedWorkspaces.map((option) => (
                    <SelectedWorkspace
                      key={option.id}
                      workspace={option}
                      onClick={handleSelect}
                    />
                  ))}
                </>
              )}
              {!!collaboratingWorkspaces.length && (
                <>
                  <p className="text-muted-foreground">Private</p>
                  <hr />
                  {collaboratingWorkspaces.map((option) => (
                    <SelectedWorkspace
                      key={option.id}
                      workspace={option}
                      onClick={handleSelect}
                    />
                  ))}
                </>
              )}
            </div>
            <CustomDialogTrigger
              header="Create A Workspace"
              content={<WorkspaceCreator />}
              description="Workspaces give you the power to collaborate with others. You can change your workspace privacy settings after creating the workspace too."
            >
              <div className="flex transition-all hover:bg-muted justify-center items-center gap-2 p-2 w-full ">
                <article className="text-slate-500 rounded-full bg-slate-800 w-4 h-4 flex items-center justify-center">
                  +
                </article>
                Create Workspace
              </div>
            </CustomDialogTrigger>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkspaceDropdown;
