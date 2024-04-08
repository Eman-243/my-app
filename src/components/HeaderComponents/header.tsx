/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Zth05HEKX4i
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/HeaderComponents/ui/input"
import { Button } from "@/components/HeaderComponents/ui/button"
interface IconProps extends React.SVGProps<SVGSVGElement> { }


export default function Component() {
  return (
    <header className="bg-black pt-1 pb-0 px-8 font-sans">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between">
        <div className="flex items-baseline space-x-8">
          <img
            alt="Nexcel logo"
            className="h-8 md:h-10"
            height="32"
            src="/logo1.png"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "120px",
              maxHeight: "70px",
            }}
          />
          <nav className="hidden space-x-4 md:flex mr-4">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
            <Link href="/products" className="text-white hover:text-gray-300">Shop</Link>
          </nav>
          <div className="relative w-96 mb-1">
  <Input className="pl-10 w-full" placeholder="Search" type="search" />
  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
</div>

        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart">
          <ShoppingCartIcon className="text-white" />
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">Sign In</Link>
          <Link href="/about" className="text-white hover:text-gray-300">About Us</Link>
          <Link href="/english" className="text-white hover:text-gray-300">English</Link>
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
