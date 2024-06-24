"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
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
// import logo from "@/public/static/mst-images/logo-transparent.png";
import CustomButton from "@/components/auth/crazy-button";
import { useSearchParams } from "next/navigation";

export default function SignUpPage() {
  const searchParams = useSearchParams();
  return (
    <div className="relative grid min-h-[80vh] w-full grow  px-4 sm:justify-center">

      <div className="relative z-10 grid py-16 sm:py-24">
        <SignUp.Root>
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <>
                <SignUp.Step name="start">
                  <Card className="w-full rounded-xl border  shadow ring-0 backdrop-blur-lg sm:w-[400px]">
                    <CardHeader className="space-y-1 pb-7">
                      {/* <Image
                        src={logo}
                        alt="Company logo"
                        className="width-150 height-50 mx-auto pb-2"
                        width={150}
                        height={35}
                      /> */}
                      <p className="font-mono font-sm mx-auto text-sm">logo goes here</p>
                      <CardTitle className="text-center text-lg font-bold">
                        Create your account
                      </CardTitle>
                      <CardDescription className="text-center text-[0.8125rem] font-normal text-muted-foreground">
                        Fill in the information below to get started.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-5 rounded-b-lg bg-white px-10 shadow-xl">
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
                      <p className="flex items-center gap-x-3 text-[0.8125rem] text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                        or
                      </p>
                      <Clerk.Field name="emailAddress" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label variant={"clerk"} className="text-[0.8125rem]">
                            Email address
                          </Label>
                        </Clerk.Label>
                        <Clerk.Input type="text" required asChild>
                          <Input
                            // variant={"clerk"}
                            className="h-8 border bg-white/70 text-[.8125rem] font-normal ring-0"
                          />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>
                      <Clerk.Field name="password" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label variant={"clerk"} className="text-[0.8125rem]">
                            {" "}
                            Password
                          </Label>
                        </Clerk.Label>
                        <Clerk.Input type="password" required asChild>
                          <Input
                            // variant={"clerk"}
                            className="font-base h-8 border bg-white/70 text-[.8125rem] ring-0"
                          />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>
                      <div className="grid w-full gap-y-4">
                        <SignUp.Action submit asChild>
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
                        </SignUp.Action>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-transparent py-4">
                      <div className="flex w-full flex-row items-center justify-center">
                        <span className="text-xs text-zinc-700">
                          Already have an account?
                        </span>
                        <Button
                          className="h-6 pl-2 pr-0 text-xs font-semibold text-zinc-800 hover:text-zinc-900 hover:underline"
                          variant={"ghost"}
                        >
                          <Link href="/sign-in">Sign in</Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </SignUp.Step>

                {/* <SignUp.Step name="continue">
                  <Card className="w-full border  shadow ring-0 backdrop-blur-lg sm:w-96">
                    <CardHeader>
                      <Image src={logo} alt="company logo" className="mx-auto pb-4" width={150} />
                      <CardDescription className="text-center text-xs text-muted-foreground">
                        Complete your registration by filling out the fields below.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-4 rounded-b-lg bg-white shadow-xl">
                      <div className='grid grid-cols-2 gap-4'>
                        <Clerk.Field name="firstName" className="space-y-2">
                          <Clerk.Label>
                            <Label variant={'clerk'} className="flex w-full flex-row justify-between">
                              First Name <span className="text-muted-foreground">  </span>
                            </Label>
                          </Clerk.Label>
                          <Clerk.Input type="text" asChild>
                            <Input variant={'clerk'} className="h-8" />
                          </Clerk.Input>
                          <Clerk.FieldError className="block text-sm text-destructive" />
                        </Clerk.Field>
                        <Clerk.Field name="firstName" className="space-y-2">
                          <Clerk.Label>
                            <Label variant={'clerk'} className="flex w-full flex-row justify-between">
                              Last Name <span className="text-muted-foreground">  </span>
                            </Label>
                          </Clerk.Label>
                          <Clerk.Input type="text" asChild>
                            <Input variant={'clerk'} className="h-8" />
                          </Clerk.Input>
                          <Clerk.FieldError className="block text-sm text-destructive" />
                        </Clerk.Field>
                      </div>
                      <Clerk.Field name="company" className="space-y-2">
                        <Clerk.Label>
                          <Label variant={'clerk'} className="flex w-full flex-row justify-between">
                            Company <span className="text-muted-foreground"></span>
                          </Label>
                        </Clerk.Label>
                        <Clerk.Input type="text" asChild>
                          <Input variant={'clerk'} className="h-8" />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>
                      <Clerk.Field name="address" className="space-y-2">
                        <Clerk.Label>
                          <Label variant={'clerk'} className="flex w-full flex-row justify-between">
                            Company Address <span className="text-muted-foreground"></span>
                          </Label>
                        </Clerk.Label>
                        <Clerk.Input type="text" asChild>
                          <Input variant={'clerk'} className="h-8" />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>
                      <div className="grid w-full gap-y-4">
                        <SignUp.Action submit>
                          <CustomButton disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <Icons.spinner className="size-4 animate-spin" />
                                ) : (
                                  'Continue to [Your app]'
                                )
                              }}
                            </Clerk.Loading>
                          </CustomButton>
                        </SignUp.Action>
                      </div>
                    </CardContent>
                      <CardFooter className="bg-transparent px-8 py-3">
                        <div className="flex w-full flex-row items-center justify-between">
                          <SignUp.Action navigate="start">
                            <Button
                              className="h-6 px-0 text-xs  text-zinc-700 hover:text-zinc-900 hover:underline"
                              variant={'ghost'}
                            >
                              go back
                            </Button>
                          </SignUp.Action>
                          <Button
                            className="h-6 px-0 text-xs  text-zinc-700 hover:text-zinc-900 hover:underline"
                            variant={'ghost'}
                          >
                            <Link href="/sign-in">sign in</Link>
                          </Button>
                        </div>
                      </CardFooter>

                  </Card>
                </SignUp.Step> */}

                <SignUp.Step name="verifications">
                  <SignUp.Strategy name="code">
                    <Card className="w-full border shadow ring-0 backdrop-blur-lg sm:w-96 ">
                      <CardHeader>
                        {/* <Image
                          src={logo}
                          alt="company logo"
                          className="mx-auto pb-4"
                          width={150}
                        /> */}
                        <p className="font-mono font-sm mx-auto text-sm">logo goes here</p>
                        <CardTitle className="text-center text-xl font-bold">
                          Verify your email
                        </CardTitle>
                        <CardDescription className="text-center text-xs text-muted-foreground">
                          Use the verification link sent to your email address
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-y-4 rounded-b-lg bg-white shadow-xl">
                        <Clerk.Field name="code">
                          <Clerk.Label className="sr-only">
                            Verification code
                          </Clerk.Label>
                          <div className="grid items-center justify-center gap-y-2">
                            <Clerk.Field name="code" className="space-y-2">
                              <Clerk.Label asChild>
                                <Label className="sr-only">Email address</Label>
                              </Clerk.Label>
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
                            </Clerk.Field>
                            <SignUp.Action
                              resend
                              className="text-muted-foreground"
                              fallback={({ resendableAfter }) => (
                                <Button size="sm" variant={"ghost"} disabled>
                                  Didn&apos;t recieve a code? Resend in
                                  <span className="pl-1 tabular-nums">
                                    {" "}
                                    {resendableAfter}s
                                  </span>
                                </Button>
                              )}
                            >
                              <Button size="sm" variant={"ghost"}>
                                Didn&apos;t recieve a code?{" "}
                                <span className=" mt-px pl-2 font-bold text-primary hover:underline">
                                  Resend
                                </span>
                              </Button>
                            </SignUp.Action>
                          </div>
                        </Clerk.Field>
                        <div className="grid gap-y-4">
                          <SignUp.Action submit>
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
                          </SignUp.Action>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-transparent px-8 py-3">
                        <div className="flex w-full flex-row items-center justify-between">
                          <SignUp.Action navigate="start">
                            <Button
                              className="h-6 px-0 text-xs  text-zinc-700 hover:text-zinc-900 hover:underline"
                              variant={"ghost"}
                            >
                              go back
                            </Button>
                          </SignUp.Action>
                          <Button
                            className="h-6 px-0 text-xs  text-zinc-700 hover:text-zinc-900 hover:underline"
                            variant={"ghost"}
                          >
                            <Link href="/sign-in">sign in</Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignUp.Strategy>
                </SignUp.Step>
              </>
            )}
          </Clerk.Loading>
        </SignUp.Root>
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
