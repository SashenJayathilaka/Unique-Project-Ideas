"use client";

import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import useSWR from "swr";
import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import { Message } from "../typings";
import fetcher from "../utils/fetchMessages";

type Props = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};

function ChatInput({ session }: Props) {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  const { data: user }: any = useSession();

  /*console.log(data);*/

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input || !session) return;

    const messageTOSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id: id,
      message: messageTOSend,
      created_at: Date.now(),
      username: user?.user?.name!,
      profilePic: user?.user?.image!,
      email: user?.user?.email!,
      userId: user?.user?.uid!,
    };

    const uplodeMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());

      return [data.message, ...messages!];

      /*console.log("Message Added >>>>", data);*/
    };

    await mutate(uplodeMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex bottom-0 bg-white w-full px-10 py-5 space-x-2 border-t border-gray-100 sticky z-50"
    >
      <input
        value={input}
        disabled={!session}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        placeholder="Enter message here..."
      />
      <button
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
