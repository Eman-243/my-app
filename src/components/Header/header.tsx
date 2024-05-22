"use client";
import Link from "next/link"
import { Input } from "@/components/Header/ui/input"
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { useEffect } from "react";
import  FirstSidebar  from "@/components/Header/ui/firstSidebar";
import SecondSidebar  from "@/components/Header/ui/SecondSidebar";




export default function Component() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarVisible]);


  return (
    <header className="bg-black  w-full">
      <div className="flex justify-center lg:justify-around tablet:items-baseline lg:max-w-6xl  miniphone:max-w-7xl miniphone:items-center mx-auto ">
        <div className="flex justify-between items-baseline lg:p-0 px-4">
          <div className="mx-auto flex w-full sm:max-w-6xl miniphone:items-center minitablet:items-baseline  tablet:items-baseline sm:items-baseline  justify-around">
            <button className="tablet:hidden pr-4"  onClick={toggleSidebar}>
              <TfiMenu className="text-white h-7 w-7" />
            </button>
            <div className=" flex items-baseline miniphone:items-center h-20 w-20 lg:h-24 miniscreen:w-24 lg:w-16 miniphone:h-14 phone:h-16 phone:w-11 miniphone:w-11 pt-1 miniphone:mb-6 phone:mb-5 miniphone:mr-2 phone-mr-2">
              <img src="/logo1.png" alt="logo" />
            </div>
          </div>
          <nav className="hidden space-x-4 ml-5 tablet:flex">
            <Link href="/" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Home</Link>
            <Link href="/services" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Services</Link>
            <Link href="/blogs" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Blog</Link>
            <Link href="/products" className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg">Shop</Link>
          </nav>
        </div>
        <div className="flex justify-center items-center relative tablet:w-60 miniscreen:w-96 lg:w-80 phon:my-0 sm:my-3 miniphone:w-52 miniphone:h-10 ">
          <Input className="pl-10 w-full" placeholder="Search" type="search" />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <Link href="/cart" className="minitablet:hidden items-baseline miniphone:flex  lg:mb-auto tablet:mb-auto text-bottom px-4">
          <RiShoppingCartLine className="text-white  mb-auto miniphone:h-7 miniphone:w-7" />
        </Link>
        <div className="hidden items-baseline minitablet:flex space-x-4 ml-6 h-full">
          <Link href="/cart" className="items-baseline lg:mb-auto tablet:mb-auto text-bottom ">
            <RiShoppingCartLine className="text-white lg:h-6 lg:w-6 sm:h-5 sm:w-5" />
          </Link>
          <Link href="/sign-in" className="text-white hover:text-gray-300 minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg">
            Sign In
          </Link>
          <Link href="/about-us" className="text-white hover:text-gray-300 minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg">
            About Us
          </Link>
          <Link href="/english" className="text-white hover:text-gray-300  minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg">
            English
          </Link>
        </div>
        <FirstSidebar sidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      
      </div>
    </header>
  )
}

