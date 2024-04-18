import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "@/components/Products/sidebar";
import Products from "@/components/Products/products";
import Topbar from "@/components/Products/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="w-full max-w-6xl mx-auto py-2 box-content grid grid-cols-8 h-full">
            <div className="col-span-1 h-full">
                <Sidebar></Sidebar>
            </div>
            <div className="col-span-7">
                <Topbar></Topbar>
                <Products></Products>
                <div className="flex-shrink-0">
                    {children}
                </div>
            </div>
        </div>
    )
}


