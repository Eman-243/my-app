/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/HDcos0fu68s
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  max-w-6xl mx-auto font-sans px-4 py-6 my-10 ">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-semibold  text-center mb-10">Join Us</h1>
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
          <div>
            <label className="sr-only" htmlFor="confirm-password">
              Confirm Password
            </label>
            <Input id="confirm-password" placeholder="Confirm Password" type="password" required minLength={8} />
          </div>
          <div>
            <label className="sr-only" htmlFor="phone-number">
              Phone Number
            </label>
            <Input id="phone-number" placeholder="Phone Number" type="tel" required pattern="[0-9]{8}" />
          </div>
          <Button className="w-full bg-[#F9B823] dark:hover:bg-[#F9B823] dark:hover:text-white text-white" type="submit">Register</Button>
        </form>
        <div className="mt-1 text-center">
          <Link className="text-xs text-gray-500 hover:underline" href="/sign-in">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

  
