import {
  getCollaboratingWorkspace,
  getFolders,
  getPrivateWorkspaces,
  getShareWorkspaces,
  getUserSubscriptionStatus,
} from "@/lib/supabase/queries";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { ScrollArea } from "../ui/scroll-area";
import FoldersDropdownList from "./folders-dropdownList";
import NativeNavigation from "./native-navigation";
import PlanUsage from "./plan-usage";
import UserCard from "./user-card";
import WorkspaceDropdown from "./workspace-dropdown";

type Props = {
  params: { workspaceId: string };
  className?: string;
};

async function Sidebar({ params, className }: Props) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data: subscriptionData, error: subscriptionError } =
    await getUserSubscriptionStatus(user.id);

  const { data: workspaceFolderData, error: foldersError } = await getFolders(
    params.workspaceId
  );

  if (subscriptionError || foldersError) redirect("/dashboard");

  const [privateWorkspaces, collaboratingWorkspaces, sharedWorkspaces] =
    await Promise.all([
      getPrivateWorkspaces(user.id),
      getCollaboratingWorkspace(user.id),
      getShareWorkspaces(user.id),
    ]);

  return (
    <aside
      className={twMerge(
        "hidden sm:flex sm:flex-col w-[280px] shrink-0 p-4 md:gap-4 !justify-between",
        className
      )}
    >
      <div>
        <WorkspaceDropdown
          privateWorkspaces={privateWorkspaces}
          sharedWorkspaces={sharedWorkspaces}
          collaboratingWorkspaces={collaboratingWorkspaces}
          defaultValue={[
            ...privateWorkspaces,
            ...collaboratingWorkspaces,
            ...sharedWorkspaces,
          ].find((workspace) => workspace.id === params.workspaceId)}
        />
        <PlanUsage
          foldersLength={workspaceFolderData?.length || 0}
          subscription={subscriptionData}
        />
        <NativeNavigation myWorkspaceId={params.workspaceId} />
        <ScrollArea className="overflow-scroll relative h-[450px] scrollbar-hide">
          <div className="pointer-events-none w-full absolute bottom-0 h-20 bg-gradient-to-t from-background to-transparent z-40" />
          <FoldersDropdownList
            workspaceFolders={workspaceFolderData || []}
            workspaceId={params.workspaceId}
          />
        </ScrollArea>
      </div>
      <UserCard subscription={subscriptionData} />
    </aside>
  );
}

export default Sidebar;
