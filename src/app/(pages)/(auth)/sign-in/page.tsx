"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Cart/ui/input";
import Link from "next/link";
import { Button } from "@/components/Cart/ui/button";
import { useAuth } from "@/hooks/useAuth"; // Import the custom hook

export default function SignIn() {
  const router = useRouter();
  const { login } = useAuth(); // Use the login function from the custom hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password
      }, { withCredentials: true });

      if (response.status === 200) {
        const token = response.data.token; // Assuming the token is in the response
        login(token); // Call the login function from the custom hook
        router.push('/');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto font-sans px-4 py-6 my-10">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-10">Welcome</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="sr-only" htmlFor="email">Email Address</label>
            <Input
              id="email"
              placeholder="Email Address"
              type="email"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">Password</label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              required
              minLength={8}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-xs text-gray-500 hover:underline">Forgot Password?</Link>
          </div>
          <Button className="w-full bg-[#F9B823] text-white" type="submit">Login</Button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/sign-up">
            <Button className="w-full" variant="outline">Create Account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
