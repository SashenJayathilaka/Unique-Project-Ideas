"use client";

import { SessionProvider } from "next-auth/react";

export function Providers({ session, children }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
