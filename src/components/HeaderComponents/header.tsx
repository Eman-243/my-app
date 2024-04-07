/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Zth05HEKX4i
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/HeaderComponents/ui/input"
import { Button } from "@/components/HeaderComponents/ui/button"
interface IconProps extends React.SVGProps<SVGSVGElement> {}


export default function Component() {
  return (
    <header className="bg-white py-4 px-8 font-sans" >
      <div className="mx-auto flex max-w-6xl items-baseline justify-between">
        <div className="flex items-baseline space-x-8">
        <img
  alt="Nexcel logo"
  className="h-8 md:h-10"
  height="32"  // Decreased height to make it smaller
  src="/logo.png"
  style={{
    width: "auto",  // Letting the browser adjust the width automatically
    height: "auto",  // Letting the browser adjust the height automatically
    maxWidth: "120px",  // Limiting the maximum width to 120 pixels
    maxHeight: "70px",  // Limiting the maximum height to 40 pixels
  }}
/>


          <nav className="hidden space-x-4 md:flex">
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
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input className="pl-10" placeholder="Search" type="search" />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <ShoppingCartIcon className="text-gray-600" />
          <Link className="text-gray-600 hover:text-gray-900" href="/login">
            Sign In
          </Link>
          <Link href="/login">
          <Button className="bg-yellow-400 text-white">Sign Up</Button>

          </Link>
          
        </div>
      </div>
    </header>
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
