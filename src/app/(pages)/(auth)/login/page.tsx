/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NTpW2Bohs86
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/Cart/ui/input"
import Link from "next/link"
import { Button } from "@/components/Cart/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full max-w-6xl mx-auto font-sans bg-white px-4 py-6 mt-10">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-10">Welcome</h1>
        <form className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">
              Email Address
            </label>
            <Input id="email" placeholder="Email Address" type="email" required />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="Password" type="password" required minLength={8} />
          </div>
          <div className="flex justify-end right-0">
            <Link className="text-xs text-gray-500 hover:underline" href="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <Button className="w-full bg-[#F9B823] text-white" type="submit">Login</Button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/register">
            <Button className="w-full" variant="outline">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

