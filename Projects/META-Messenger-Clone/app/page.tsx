import React from "react";
import { unstable_getServerSession } from "next-auth";

import ChatInput from "./ChatInput";
import MessageLIst from "./MessageLIst";
import { Message } from "../typings";
import { Providers } from "./providers";

type Props = {};

async function page({}: Props) {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;
  const session = await unstable_getServerSession();

  /* console.log(data);*/

  return (
    <Providers session={session}>
      <main>
        <MessageLIst initialMessage={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}

export default page;
