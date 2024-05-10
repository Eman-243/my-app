"use client";
import { useState } from "react";
import Path from "@/components/path";
import { usePathname } from "next/navigation";
import path from "path";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname();
    
    console.log(pathname); // Add this line

    // Don't render Path component for these routes
    const noPathRoutes = ['/register', '/forgot-password', '/login' ,'/about'];

    if (noPathRoutes.includes(pathname)) {
        return (
            <div>
                {children}
            </div>
        );
    }

    return (
        <div>
            <Path />
            {children}
        </div>
    );
}
