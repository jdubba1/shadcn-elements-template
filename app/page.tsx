import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full py-12 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="text-lg font-bold text-center mx-auto h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          Clerk Elements + Shadcn UI + Next.js Demo
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-center">
        <Link href="/sign-in">
          <div className=" group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="mx-auto">
              <h2 className="mb-3 text-2xl font-semibold">
                Sign In Page{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </div>
          </div>
        </Link>

        <Link href='/sign-up'>
          <div className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="mx-auto">
              <h2 className="mb-3 text-2xl font-semibold">
                Sign Up Page{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </div>
          </div>
        </Link>
      </div>
        <div className="mx-auto py-12">
          <p className="text-center">
            Want the code? Check out the <Link href="https://github.com/jdubba1/shadcn-elements-template"><span className="underline">github repo.</span></Link>
          </p>
        </div>
    </main>
  );
}
