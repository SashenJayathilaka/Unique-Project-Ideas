import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import clsx from "clsx";

type Props = {
  header?: string;
  content?: React.ReactNode;
  children: React.ReactNode;
  description?: string;
  className?: string;
};

function CustomDialogTrigger({
  children,
  className,
  content,
  description,
  header,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger className={clsx("", className)}>{children}</DialogTrigger>
      <DialogContent className="h-screen block sm:h-[440px] overflow-scroll w-full scrollbar-hide">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialogTrigger;
