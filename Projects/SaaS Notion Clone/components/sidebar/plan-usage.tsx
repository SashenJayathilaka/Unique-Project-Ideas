"use client";

import { MAX_FOLDERS_FREE_PLAN } from "@/lib/constants";
import { useAppState } from "@/lib/providers/state-provider";
import { Subscription } from "@/types/supabase";
import { useEffect, useState } from "react";
import CypressDiamondIcon from "../icons/cypressDiamongIcon";
import { Progress } from "../ui/progress";

type Props = {
  foldersLength: number;
  subscription: Subscription | null;
};

function PlanUsage({ foldersLength, subscription }: Props) {
  const { workspaceId, state } = useAppState();
  const [usageParentage, setUsageParentage] = useState(
    (foldersLength / MAX_FOLDERS_FREE_PLAN) * 100
  );

  useEffect(() => {
    const stateFoldersLength = state.workspaces.find(
      (workspace) => workspace.id === workspaceId
    )?.folders.length;

    if (stateFoldersLength === undefined) return;

    setUsageParentage((stateFoldersLength / MAX_FOLDERS_FREE_PLAN) * 100);
  }, [state, workspaceId]);

  return (
    <article className="mb-4">
      {subscription?.status !== "active" && (
        <div className="flex gap-2 text-muted-foreground mb-2 items-center">
          <div className="h-4 w-4">
            <CypressDiamondIcon />
          </div>
          <div className="flex justify-between w-full items-center">
            <div>Free Plan</div>
            <small>{usageParentage.toFixed(0)} % / 100</small>
          </div>
        </div>
      )}
      {subscription?.status !== "active" && (
        <Progress value={usageParentage} className="h-1" />
      )}
    </article>
  );
}

export default PlanUsage;
