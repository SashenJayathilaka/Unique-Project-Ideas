"use client";

import { workspace } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  workspace: workspace;
  onClick?: (option: workspace) => void;
};

function SelectedWorkspace({ onClick, workspace }: Props) {
  const supabase = createClientComponentClient();
  const [workspaceLogo, setWorkspaceLogo] = useState("/cypresslogo.svg");
  // console.log("🚀 ~ SelectedWorkspace ~ workspaceLogo,:", workspaceLogo);

  useEffect(() => {
    if (workspace.logo) {
      const path = supabase.storage
        .from("workspace-logos")
        .getPublicUrl(workspace.logo)?.data.publicUrl;

      setWorkspaceLogo(path);
    }
  }, [workspace]);

  return (
    <Link
      href={`/dashboard/${workspace.id}`}
      onClick={() => {
        if (onClick) onClick(workspace);
      }}
      className="flex rounded-md hover:bg-muted transition-all flex-row p-2 gap-4 justify-center cursor-pointer items-center my-2"
    >
      <Image
        src={workspaceLogo}
        alt="workspace logo"
        width={26}
        height={26}
        objectFit="cover"
      />
      <div className="FLEX flex-col">
        <p className="text-lg w-[170px] overflow-hidden overflow-ellipsis whitespace-nowrap">
          {workspace.title}
        </p>
      </div>
    </Link>
  );
}

export default SelectedWorkspace;
