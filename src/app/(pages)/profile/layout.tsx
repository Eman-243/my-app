"use client";
import Sidebar from "@/components/Profile/sidebar";
import Topbar from "@/components/Profile/topbar";
import Userinfo from "@/components/Profile/userInfo";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [hideUserinfo, setHideUserinfo] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    useEffect(() => {
        if (pathname === '/profile/order-history' || pathname === '/profile/account-information') {
            setHideUserinfo(true);
        } else {
            setHideUserinfo(false);
        }
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [pathname]);

    if (isLoading) {
        return (

                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
                    </div>
                </div>

        )
    }

    return (
        <div className="w-full max-w-6xl mx-auto py-2 box-content grid grid-cols-12 max-h-min mb-10">
            <div className="col-span-2 w-full h-full">
                <Sidebar />
            </div>
            <div className="col-span-10 w-full h-full">
                <Topbar />
                {!hideUserinfo && <Userinfo />}
                {children}
            </div>
        </div>
    );
}
