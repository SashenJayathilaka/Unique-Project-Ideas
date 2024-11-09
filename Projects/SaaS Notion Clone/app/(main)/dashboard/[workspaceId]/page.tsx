export const dynamic = "force-dynamic";

import QuillEditor from "@/components/quill-editor/quill-editor";
import { getShareWorkspacesDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";

const Workspace = async ({ params }: { params: { workspaceId: string } }) => {
  const { data, error } = await getShareWorkspacesDetails(params.workspaceId);
  console.log("🚀 ~ Workspace ~  data:", data);

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
};

export default Workspace;
