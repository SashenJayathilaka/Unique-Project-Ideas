"use client";

import { useAppState } from "@/lib/providers/state-provider";
import { createWorkspace } from "@/lib/supabase/queries";
import { Subscription, workspace } from "@/types/supabase";
import { CreateWorkspaceFormSchema } from "@/types/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthUser } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { z } from "zod";
import Loader from "../global/Loader";
import EmojiPicker from "../global/emoji-picker";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

type Props = {
  user: AuthUser;
  subscription: Subscription | null;
};

function DashboardSetup({ subscription, user }: Props) {
  const [selectedEmoji, setSelectedEmoji] = useState("🧑‍💻");
  const router = useRouter();
  const { dispatch } = useAppState();
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting: isLoading, errors },
  } = useForm<z.infer<typeof CreateWorkspaceFormSchema>>({
    mode: "onChange",
    defaultValues: {
      logo: "",
      workspaceName: "",
    },
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof CreateWorkspaceFormSchema>
  > = async (value) => {
    const file = value.logo?.[0];
    let filePath = null;
    const workspaceUUID = v4();

    if (file) {
      // const fileUUID = v4();
      try {
        const { data, error } = await supabase.storage
          .from("workspace-logos")
          .upload(`workspaceLogo.${workspaceUUID}`, file, {
            cacheControl: "3600",
            upsert: true,
          });
        if (error) throw new Error("");
        filePath = data.path;
      } catch (error) {
        console.log("Error", error);
        toast({
          variant: "destructive",
          title: "Error! Could not upload your workspace logo",
        });
      }
    }

    try {
      const newWorkspace: workspace = {
        data: null,
        created_at: new Date().toISOString(),
        icon_id: selectedEmoji,
        id: workspaceUUID,
        in_trash: "",
        title: value.workspaceName,
        workspace_owner: user.id,
        logo: filePath || null,
        banner_url: "",
      };
      const { data, error: createError } = await createWorkspace(newWorkspace);
      if (createError) {
        throw new Error();
      }
      dispatch({
        type: "ADD_WORKSPACE",
        payload: { ...newWorkspace, folders: [] },
      });

      toast({
        title: "Workspace Created",
        description: `${newWorkspace.title} has been created successfully.`,
      });

      router.replace(`/dashboard/${newWorkspace.id}`);
    } catch (error) {
      console.log(error, "Error");
      toast({
        variant: "destructive",
        title: "Could not create your workspace",
        description:
          "Oops! Something went wrong, and we couldn't create your workspace. Try again or come back later.",
      });
    } finally {
      reset();
    }
  };

  return (
    <Card className="w-[800px] h-screen sm:h-auto">
      <CardHeader>
        <CardTitle>Create A Workspace</CardTitle>
        <CardDescription>
          Lets create a private workspace to get you started.You can add
          collaborators later from the workspace settings tab
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl">
                <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
                  {selectedEmoji}
                </EmojiPicker>
              </div>
              <div className="w-full">
                <label
                  htmlFor="workspaceName"
                  className="text-sm text-muted-foreground"
                >
                  Workspace Name
                </label>
                <Input
                  id="workspaceName"
                  type="text"
                  placeholder="Workspace Name"
                  disabled={isLoading}
                  {...register("workspaceName", {
                    required: "workspace name is required",
                  })}
                />
                <small className="text-red-600">
                  {errors?.workspaceName?.message?.toString()}
                </small>
              </div>
            </div>
            <div>
              <label htmlFor="logo" className="text-sm text-muted-foreground">
                Name
              </label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                placeholder="Workspace Logo"
                // disabled={isLoading || subscription?.status !== "active"}
                {...register("logo", {
                  required: "workspace logo is required",
                })}
              />
              <small className="text-red-600">
                {errors?.workspaceName?.message?.toString()}
              </small>
              {subscription?.status !== "active" && (
                <small
                  className="
                  text-muted-foreground
                  block
              "
                >
                  To customize your workspace, you need to be on a Pro Plan
                </small>
              )}
            </div>
            <div className="self-end">
              <Button disabled={isLoading} type="submit">
                {!isLoading ? "Create Workspace" : <Loader />}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default DashboardSetup;
