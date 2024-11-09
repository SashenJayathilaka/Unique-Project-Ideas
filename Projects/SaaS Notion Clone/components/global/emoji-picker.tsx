"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type Props = {
  children: React.ReactNode;
  getValue?: (emoji: string) => void;
};

function EmojiPicker({ children, getValue }: Props) {
  const route = useRouter();
  const Picker = dynamic(() => import("emoji-picker-react"));
  const onClick = (selectEmoji: any) => {
    if (getValue) getValue(selectEmoji.emoji);
  };

  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger className="cursor-pointer">{children}</PopoverTrigger>
        <PopoverContent className="p-0 border-none">
          <Picker onEmojiClick={onClick} />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default EmojiPicker;
