export const dynamic = "force-dynamic";

import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFoldersDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";

type Props = {
  params: { workspaceId: string; folderId: string; fileId: string };
};

async function FolderPage({ params }: Props) {
  const { data, error } = await getFoldersDetails(params.folderId);
  console.log("🚀 ~ FolderPage ~ data:", data);

  if (error || !data?.length) redirect("/dashboard");

  return (
    <div className="relative">
      <QuillEditor
        dirType="workspace"
        fileId={params.workspaceId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
}

export default FolderPage;
