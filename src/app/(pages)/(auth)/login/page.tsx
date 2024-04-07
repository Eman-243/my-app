/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NTpW2Bohs86
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto mb-8 font-sans bg-white px-4 py-6">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-10">Welcome</h1>
        <form className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">
              Email Address
            </label>
            <Input id="email" placeholder="Email Address" type="email" />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <div className="flex justify-between">
            <Link className="text-sm text-blue-600 hover:underline" href="#">
              Forgot Password?
            </Link>
          </div>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Login</Button>
        </form>
        <div className="mt-4 text-center">
          <Button className="w-full" variant="outline">
            Create Account
          </Button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 mb-8">
        <img
          alt=""
          className="w-[300px] h-[300px]"
          height="300"
          src="/loginPic.png"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
    </div>
  )
}

