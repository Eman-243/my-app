'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NTpW2Bohs86
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/Cart/ui/input"
import Link from "next/link"
import { Button } from "@/components/Cart/ui/button"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import axios from "axios";


export default function Component() {

  const router = useRouter();
  const Log = (event: FormEvent) => {
    event.preventDefault();
    const password = username;

    axios({
        method: 'post',
        url: 'http://localhost:3000/login/api',
        withCredentials: true,
        data: {
            username: username,
            password: password
        }
    }).then(async res => {
        if (res.status === 201) {
            // router.push('/tickets');
        } else {
          console.log(res.data.body.message);
          
            alert(res.data.message)
        }
    })
}

const [username, setUsername] = useState('') 
const [password, setPassword] = useState('')

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full max-w-6xl mx-auto font-sans bg-white px-4 py-6 mt-10">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-10">Welcome</h1>
        <form className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="Username">
              Username
            </label>
            <Input id="username" placeholder="Username" type="text" required onChange={e=> setUsername(e.target.value)}/>
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="Password" type="password" required minLength={8} onChange={e=> setPassword(e.target.value)}/>
          </div>
          <div className="flex justify-end right-0">
            <Link className="text-xs text-gray-500 hover:underline" href="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <Button className="w-full bg-[#F9B823] text-white" onClick={Log}>Login</Button>
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

