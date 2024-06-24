"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CustomButton from "@/components/auth/crazy-button";

export default function SignInPage() {
  return (
    <div className="relative grid w-full grow items-center px-4 sm:justify-center">
      <div className="relative z-10 grid h-[80vh] place-content-center">
        <SignIn.Root>
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <>
                <SignIn.Step name="start">
                  <Card className="w-full border  shadow ring-0 backdrop-blur-lg sm:w-96">
                    <CardHeader>
                      {/* <Image
                        src={logo}
                        alt="company logo"
                        className="mx-auto pb-4"
                        width={150}
                      />
                       */}
                       <p className="font-mono font-sm mx-auto text-sm">logo goes here</p>
                      <CardTitle className="text-center text-xl font-bold">
                        Sign in to [your app]
                      </CardTitle>
                      <CardDescription className="text-center text-xs text-muted-foreground">
                        Welcome back! Please sign in to continue.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-4 rounded-b-lg bg-white shadow-xl">
                      <div className="flex flex-col gap-4">
                      <Clerk.Connection name="microsoft" asChild>
                          <Button
                            size="sm"
                            className="h-8 border bg-white/70 text-[0.8125rem] text-gray-600 shadow-sm hover:text-primary"
                            variant="ghost"
                            disabled={isGlobalLoading}
                          >
                            <Clerk.Loading scope="provider:microsoft">
                              {(isLoading) =>
                                isLoading ? (
                                  <Icons.spinner className="size-3 animate-spin" />
                                ) : (
                                  <>
                                    <Image
                                      src="https://img.clerk.com/static/microsoft.svg"
                                      alt="Sign in with Microsoft"
                                      width={16}
                                      height={16}
                                      className="mr-2"
                                    />
                                    Continue with Microsoft
                                  </>
                                )
                              }
                            </Clerk.Loading>
                          </Button>
                        </Clerk.Connection>
                      </div>
                      <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                        or
                      </p>
                      <Clerk.Field name="identifier" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label>Email address</Label>
                        </Clerk.Label>
                        <Clerk.Input type="email" required asChild>
                          <Input />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>

                      <Clerk.Field name="password" className="space-y-2">
                        <Clerk.Label>
                          <Label className="flex flex-row justify-between">
                            Password{" "}
                            <SignIn.Action navigate="forgot-password">
                              <span className="text-xs text-blue-500/70 hover:text-blue-500">
                                forgot password?
                              </span>
                            </SignIn.Action>
                          </Label>
                        </Clerk.Label>
                        <Clerk.Input type="password" required asChild>
                          <Input />
                        </Clerk.Input>
                        <Clerk.FieldError>
                          {({ message, code }) => (
                            <span
                              data-error-code={code}
                              className="py-2 text-xs text-red-600"
                            >
                              {message}
                            </span>
                          )}
                        </Clerk.FieldError>
                      </Clerk.Field>

                      <SignIn.Action submit asChild>
                        <CustomButton disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                <div className="flex items-center">
                                  <span>Continue</span>
                                  <svg
                                    className="ml-2 mt-[6px]"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="currentColor"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.5"
                                      d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                                    />
                                  </svg>
                                </div>
                              );
                            }}
                          </Clerk.Loading>
                        </CustomButton>
                      </SignIn.Action>
                    </CardContent>
                    <CardFooter className="bg-transparent py-4">
                      <div className="flex w-full flex-row items-center justify-center">
                        <span className="text-xs text-zinc-700">
                          Don&rsquo;t have an account?
                        </span>
                        <Button
                          className="h-6 pl-2 pr-0 text-xs font-semibold text-zinc-800 hover:text-zinc-900 hover:underline"
                          variant={"ghost"}
                          asChild
                        >
                          <Link href="/sign-up">Sign up</Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Step>

                <SignIn.Step name="choose-strategy">
                  <Card className="w-full sm:w-96">
                    <CardHeader>
                      <CardTitle>Use another method</CardTitle>
                      <CardDescription>
                        Facing issues? You can use any of these methods to sign
                        in.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <SignIn.SupportedStrategy name="email_code" asChild>
                        <Button disabled={isGlobalLoading}>Email code</Button>
                      </SignIn.SupportedStrategy>
                      <SignIn.SupportedStrategy name="password" asChild>
                        <Button disabled={isGlobalLoading}>Password</Button>
                      </SignIn.SupportedStrategy>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignIn.Action navigate="previous" asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <Icons.spinner className="size-4 animate-spin" />
                                ) : (
                                  "Go back"
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Step>

                <SignIn.Step name="verifications">
                  <SignIn.Strategy name="password">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Check your email</CardTitle>
                        <CardDescription>
                          Enter the verification code sent to your email
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">
                          Welcome back <SignIn.SafeIdentifier />
                        </p>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <Clerk.Field name="password" className="space-y-2">
                          <Clerk.Label asChild>
                            <Label>Password</Label>
                          </Clerk.Label>
                          <Clerk.Input type="password" asChild>
                            <Input />
                          </Clerk.Input>
                          <Clerk.FieldError className="block text-sm text-destructive" />
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action submit asChild>
                            <Button disabled={isGlobalLoading}>
                              <Clerk.Loading>
                                {(isLoading) => {
                                  return isLoading ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                  ) : (
                                    "Continue"
                                  );
                                }}
                              </Clerk.Loading>
                            </Button>
                          </SignIn.Action>
                          <SignIn.Action navigate="choose-strategy" asChild>
                            <Button size="sm">Use another method</Button>
                          </SignIn.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Strategy>

                  <SignIn.Strategy name="email_code">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Check your email</CardTitle>
                        <CardDescription>
                          Enter the verification code sent to your email
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">
                          Welcome back <SignIn.SafeIdentifier />
                        </p>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <Clerk.Field name="code" className="space-y-2">
                          <Clerk.Label className="sr-only">
                            Verification code
                          </Clerk.Label>
                          <div className="grid items-center justify-center gap-y-2">
                            <div className="flex justify-center text-center">
                              <Clerk.Input
                                type="otp"
                                className="flex justify-center has-[:disabled]:opacity-50"
                                autoSubmit
                                render={({ value, status }) => {
                                  return (
                                    <div
                                      data-status={status}
                                      className={cn(
                                        "relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                                        {
                                          "z-10 ring-2 ring-ring ring-offset-background":
                                            status === "cursor" ||
                                            status === "selected",
                                        },
                                      )}
                                    >
                                      {value}
                                      {status === "cursor" && (
                                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
                                        </div>
                                      )}
                                    </div>
                                  );
                                }}
                              />
                            </div>
                            <Clerk.FieldError className="block text-center text-sm text-destructive" />
                            <SignIn.Action
                              asChild
                              resend
                              className="text-muted-foreground"
                              fallback={({ resendableAfter }) => (
                                <p className="text-sm text-muted-foreground">
                                  Didn&apos;t recieve a code? Resend (
                                  <span className="tabular-nums">
                                    {resendableAfter}
                                  </span>
                                  )
                                </p>
                              )}
                            >
                              <Button size="sm">
                                Didn&apos;t recieve a code? Resend
                              </Button>
                            </SignIn.Action>
                            <Clerk.FieldError className="block text-center text-sm text-destructive" />
                          </div>
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action submit asChild>
                            <Button disabled={isGlobalLoading}>
                              <Clerk.Loading>
                                {(isLoading) => {
                                  return isLoading ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                  ) : (
                                    "Continue"
                                  );
                                }}
                              </Clerk.Loading>
                            </Button>
                          </SignIn.Action>
                          <SignIn.Action navigate="choose-strategy" asChild>
                            <Button size="sm">Use another method</Button>
                          </SignIn.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Strategy>
                </SignIn.Step>
              </>
            )}
          </Clerk.Loading>
        </SignIn.Root>
        <div className="flex justify-center py-8 text-sm">
          <Link href={"/"}>
            <Button className="h-8 bg-transparent text-black shadow-none ring-white hover:bg-white/20">
              <span className="pr-2">&larr; </span>Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <Clerk.Connection name="google" asChild>
                        <Button size="sm" variant="outline" disabled={isGlobalLoading}>
                          <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.google className="mr-2 size-4" />
                                  Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection> */
}
