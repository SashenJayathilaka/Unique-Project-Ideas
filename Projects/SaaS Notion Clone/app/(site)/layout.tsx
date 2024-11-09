import Header from "@/components/landing-page/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function HomePageLayout({ children }: Props) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default HomePageLayout;
