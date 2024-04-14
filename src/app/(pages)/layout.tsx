import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Path from "@/components/path";

export default function Layout({ children }: { children: React.ReactNode }) {

    return(
        <div>
        <Path/>
            {children}
            </div>
            
)
}