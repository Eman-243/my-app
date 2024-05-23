"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row items-center    justify-center h-full max-w-6xl mx-auto font-sans px-4 py-6 my-10">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4 p-6 bg-white dark:bg-[#121212] border-none">
            <div className="grid gap-2 border-none border-0">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" required type="email" />
            </div>

            <Button className="w-full bg-[#F9B823] dark:hover:bg-[#F9B823] dark:hover:text-white text-white" type="submit">Reset Password
            </Button>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
