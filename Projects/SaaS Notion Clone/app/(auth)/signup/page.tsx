"use client";

import Loader from "@/components/global/Loader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { actionSignUpUser } from "@/lib/server-actions/auth-actions";
import { FormSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { MailCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Logo from "../../../public/cypresslogo.svg";

const SignUpFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password must be minium 6 characters"),
    confirmPassword: z
      .string()
      .describe("Confirm Password")
      .min(6, "Password must be minium 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

type Props = {};

function SignUpPage({}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const constExchangeError = useMemo(() => {
    if (!searchParams) return;

    return searchParams.get("error_description");
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(
    () =>
      clsx("bg-primary", {
        "bg-red-500/10": constExchangeError,
        "border-red-500/50": constExchangeError,
        "text-red-700": constExchangeError,
      }),
    [constExchangeError]
  );

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async ({ email, password }: z.infer<typeof FormSchema>) => {
    const { error } = await actionSignUpUser({ email, password });

    if (error) {
      setSubmitError(error.message);
      form.reset();
      return;
    }

    setConfirmation(true);
  };

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
      >
        <Link href="/" className="w-full flex justify-center items-center">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <span className="font-semibold dark:text-white text-4xl first-letter:ml-2">
            Cypress
          </span>
        </Link>
        <FormDescription className="text-foreground/60">
          An all-In-One Collaboration and Productivity Platform
        </FormDescription>
        {!confirmation && !constExchangeError && (
          <>
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full p-6" disabled={isLoading}>
              {!isLoading ? "Create Account" : <Loader />}
            </Button>
          </>
        )}
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <span className="self-container">
          Already have an account{" "}
          <Link href="/login" className="text-primary">
            Sign Up
          </Link>
        </span>
        {(confirmation || constExchangeError) && (
          <>
            <Alert className={confirmationAndErrorStyles}>
              {!constExchangeError && <MailCheck className="h-4 w-4" />}
              <AlertTitle>
                {constExchangeError ? "Invalid Link" : "Check your email."}
              </AlertTitle>
              <AlertDescription>
                {constExchangeError || "An email confirmation has been sent."}
              </AlertDescription>
            </Alert>
          </>
        )}
      </form>
    </Form>
  );
}

export default SignUpPage;
