"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return(
    <div>
            {children}
            </div>
            
)
}
