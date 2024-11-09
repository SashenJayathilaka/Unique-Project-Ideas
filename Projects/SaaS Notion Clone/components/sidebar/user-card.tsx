import db from "@/lib/supabase/db";
import { Subscription } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { LogOut } from "lucide-react";
import { cookies } from "next/headers";
import LogoutButton from "../global/logout-button";
import ModeToggle from "../global/mode-toggle";
import CypressProfileIcon from "../icons/cypressProfileIcon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  subscription: Subscription | null;
};

async function UserCard({ subscription }: Props) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const response = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, user.id),
  });

  let avatarPath;

  if (!response) return;

  if (!response?.avatar_url) avatarPath = "";
  else {
    avatarPath = supabase.storage
      .from("avatars")
      .getPublicUrl(response.avatar_url)?.data.publicUrl;
  }

  const profile = {
    ...response,
    avatarUrl: avatarPath,
  };

  return (
    <article
      className="hidden sm:flex justify-between items-center px-4 py-2  dark:bg-Neutrals/neutrals-12rounded-3xl
  "
    >
      <aside className="flex justify-center items-center gap-2">
        <Avatar>
          <AvatarImage src={profile.avatarUrl} />
          <AvatarFallback>
            <CypressProfileIcon />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-muted-foreground">
            {subscription?.status === "active" ? "Pro Plan" : "Free Plan"}
          </span>
          <small className="w-[100px] overflow-hidden overflow-ellipsis">
            {profile.email}
          </small>
        </div>
      </aside>
      <div className="flex items-center justify-center">
        <LogoutButton>
          <LogOut />
        </LogoutButton>
        <ModeToggle />
      </div>
    </article>
  );
}

export default UserCard;
