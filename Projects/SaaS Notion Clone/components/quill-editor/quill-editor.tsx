"use client";

import { useAppState } from "@/lib/providers/state-provider";
import { File, Folder, workspace } from "@/types/supabase";
import { useRouter } from "next/navigation";
import "quill/dist/quill.snow.css";
import { useCallback, useState } from "react";

type Props = {
  dirDetails: File | Folder | workspace;
  fileId: string;
  dirType: "workspace" | "folder" | "file";
};

var TOOLBAR_OPTIONS = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

function QuillEditor({ dirDetails, dirType, fileId }: Props) {
  const { state, workspaceId, folderId, dispatch } = useAppState();
  const [quill, setQuill] = useState<any>(null);
  const router = useRouter();

  // TODO:

  /*   const details = useMemo(() => {
    let selectedDir;
    if (dirType === "file") {
      selectedDir = state.workspaces
        .find((workspace) => workspace.id === workspaceId)
        ?.folders.find((folder) => folder.id === folderId)
        ?.files.find((file) => file.id === fileId);
    }
    if (dirType === "folder") {
      selectedDir = state.workspaces
        .find((workspace) => workspace.id === workspaceId)
        ?.folders.find((folder) => folder.id === fileId);
    }
    if (dirType === "workspace") {
      selectedDir = state.workspaces.find(
        (workspace) => workspace.id === fileId
      );
    }

    if (selectedDir) {
      return selectedDir;
    }

    return {
      title: dirDetails.title,
      icon_id: dirDetails.icon_id,
      created_at: dirDetails.created_at,
      in_trash: dirDetails.in_trash,
      banner_url: dirDetails.banner_url,
    } as workspace | Folder | File;
  }, [state, workspaceId, folderId]); */

  const wrapperRef = useCallback(async (wrapper: any) => {
    if (typeof window !== "undefined") {
      if (wrapper === null) return;

      wrapper.innerHtml = "";
      const editor = document.createElement("div");
      wrapper.append(editor);
      const Quill = (await import("quill")).default;

      //TODO: WIP

      const q = new Quill(editor, {
        theme: "snow",
        modules: {
          toolbar: TOOLBAR_OPTIONS,
        },
      });
      setQuill(q);
    }
  }, []);

  /*   const restoreFileHandler = async () => {
    if (dirType === "file") {
      if (!folderId || !workspaceId) return;

      dispatch({
        type: "UPDATE_FILE",
        payload: { file: { in_trash: "" }, fileId, folderId, workspaceId },
      });

      await updateFile({ in_trash: "" }, fileId);
    }

    if (dirType == "folder") {
      if (!workspaceId) return;

      dispatch({
        type: "UPDATE_FOLDER",
        payload: { folder: { in_trash: "" }, folderId: fileId, workspaceId },
      });

      await updateFolders({ in_trash: "" }, fileId);
    }
  };

  const deleteFileHandler = async () => {
    if (dirType === "file") {
      if (!folderId || !workspaceId) return;

      dispatch({
        type: "DELETE_FILE",
        payload: { fileId, folderId, workspaceId },
      });

      await deleteFile(fileId);
      router.replace(`/dashboard/${workspaceId}`);
    }

    if (dirType == "folder") {
      if (!workspaceId) return;

      dispatch({
        type: "DELETE_FOLDER",
        payload: { folderId: fileId, workspaceId },
      });

      await deleteFolder(fileId);
      router.replace(`/dashboard/${workspaceId}`);
    }
  };
 */
  return (
    <>
      {/*   <div className="relative">
        {details.in_trash && (
          <article className="py-2 z-40 bg-[#EB5757] flex  md:flex-row flex-col justify-center items-center gap-4 flex-wrap">
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              <span className="text-white">
                This {dirType} is in the trash.
              </span>
              <Button
                size={"sm"}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#EB5757]"
                onClick={restoreFileHandler}
              >
                Restore
              </Button>
              <Button
                size={"sm"}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#EB5757]"
                onClick={deleteFileHandler}
              >
                Delete
              </Button>
            </div>
          </article>
        )}
      </div> */}

      <div className="flex  justify-center items-center flex-col mt-2 relative">
        <div
          id="container"
          className="max-w-[800px]"
          //@ts-ignore
          ref={wrapperRef}
        ></div>
      </div>
    </>
  );
}
export default QuillEditor;
