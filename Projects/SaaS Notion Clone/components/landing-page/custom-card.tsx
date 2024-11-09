import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";

type cardProps = React.ComponentProps<typeof Card>;
type Props = cardProps & {
  cardHeader?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
};

function CustomCard({
  cardContent,
  cardFooter,
  cardHeader,
  className,
  ...props
}: Props) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>{cardHeader}</CardHeader>
      <CardContent className="grid gap-4">{cardContent}</CardContent>
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
}

export default CustomCard;
