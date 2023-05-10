import React from "react";
import { getProviders } from "next-auth/react";
import Image from "next/image";

import SignInComponents from "./SignInComponents";

type Props = {};

async function page({}: Props) {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div className="pb-10">
        <Image
          className="rounded-full mx-2 object-cover"
          width={400}
          height={400}
          src="/Facebook-Messenger-Logo.png"
          alt="logo"
        />
      </div>
      <SignInComponents providers={providers} />
    </div>
  );
}

export default page;
