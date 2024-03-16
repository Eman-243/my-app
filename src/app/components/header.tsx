/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AXAdy4RX4Zb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import React from "react";
interface IconProps extends React.SVGProps<SVGSVGElement> {}



export default function header() {
  return (
    <header>
        <div className="bg-black text-white py-2">
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span>Hotline</span>
          <a className="block" href="#">
            (973) 3394 5666
          </a>
          <PhoneIcon className="text-white" />
        </div>
        <nav className="flex space-x-4">
          <Link className="block text-white" href="#">
            About
          </Link>
          <Link className="block text-white" href="#">
            English
          </Link>
          <Link className="block text-white" href="#">
            Contact us
          </Link>
          <UserIcon className="text-white" />
          <ShoppingCartIcon className="text-white" />
        </nav>
      </div>
      </div>
      <div className="max-w-7xl mx-auto pe-12 ...  ps-12 ... flex justify-between items-baseline">
        
 
        <div className="flex items-baseline space-x-4">
          <img
            alt="Logo"
            className="h-16 w-16"
            height="28"
            src="/logo.png"
            style={{
              aspectRatio: "24/24",
              objectFit: "fill",
            }}
            width="28"
          />
          <nav className="flex space-x-4">
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Services
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Shop
            </Link>
          </nav>
        </div>
        <div className="relative">
          <div className="flex items-center space-x-2">
           
            <SearchIcon className="text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  )
}

function PhoneIcon(props:IconProps) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ShoppingCartIcon(props:IconProps) {
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


function UserIcon(props:IconProps) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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
    );
  }
  
