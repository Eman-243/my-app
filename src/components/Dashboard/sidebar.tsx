"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaUserCircle } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";




interface IconProps extends React.SVGProps<SVGSVGElement> { }


export default function  SideBar() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 h-full	">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <FaUserCircle className="h-6 w-6" />
            <span className="">Hussian Nasser</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/users/"
            >
              <UsersIcon className="h-4 w-4" />
              Users
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/products"
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/Category"
            >
              <BiCategory className="h-4 w-4" />
              Category/Sub-Category
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/orders"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Orders
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/services"
            >
              <MdOutlineMiscellaneousServices className="h-4 w-4" />
              Services
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/blogs"
            >
              <TfiWrite className="h-4 w-4" />
              Blogs
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 pt-2 pb-6 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <LineChartIcon className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};




  
  
  function BellIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    )
  }
  
  
  function HomeIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
 
  
  function LineChartIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  }
  
  
  function Package2Icon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  function PackageIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }
  
  
  function SearchIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function ShoppingCartIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
  
  
  function UsersIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }