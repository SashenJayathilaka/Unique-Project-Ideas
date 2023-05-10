"use client";

import React, { useEffect, useRef } from "react";
import useSWR from "swr";

import fetcher from "../utils/fetchMessages";
import Messagecomponents from "./Messagecomponents";
import { clientPusher } from "../pusher";
import { Message } from "../typings";

type Props = {
  initialMessage: Message[];
};

const MessageLIst = ({ initialMessage }: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);
  const messageEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;

      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);

  useEffect(() => {
    if (messages) {
      messageEndRef.current?.scrollIntoView();
    } else return;
  }, [messages]);

  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {(messages || initialMessage).map((message) => (
        <Messagecomponents key={message.id} message={message} />
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageLIst;
