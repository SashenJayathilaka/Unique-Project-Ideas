import AppStateProvider from "@/lib/providers/state-provider";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: any;
};

function Layout({ children, params }: Props) {
  return (
    <main className="flex overflow-hidden h-screen">
      <AppStateProvider>{children}</AppStateProvider>
    </main>
  );
}

export default Layout;
