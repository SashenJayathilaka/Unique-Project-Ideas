import { motion } from "framer-motion";

import { useSession } from "next-auth/react";
import Image from "next/image";
import TimeAgo from "react-timeago";

import { Message } from "../typings";

type Props = {
  message: Message;
};

function Messagecomponents({ message }: Props) {
  const { data: session }: any = useSession();
  const isUser = session?.user?.uid === message.id;

  return (
    <motion.div
      initial={{
        x: isUser ? 200 : -200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`flex w-fit ${isUser && "ml-auto"} overflow-auto`}
    >
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          className="rounded-full mx-2"
          src={message.profilePic}
          alt="pic"
          height={10}
          width={50}
        />
      </div>
      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-blue-400 text-right" : "text-red-400 text-left"
          }`}
        >
          {message.username}
        </p>

        <div className="flex items-end">
          <div
            className={`px-3 py-2 rounded-lg w-fit text-white ${
              isUser ? "bg-blue-400 ml-auto order-2" : "bg-red-400"
            }`}
          >
            <p>{message.message}</p>
          </div>
          <p
            className={`text-[0.65rem] italic px-2 text-gray-300 ${
              isUser && "text-right"
            }`}
          >
            <TimeAgo date={message.created_at} />
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Messagecomponents;
