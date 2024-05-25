"use client";
import Link from "next/link";
import { Input } from "@/components/Header/ui/input";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import React, { useState, useEffect, useRef } from "react";
import { TfiMenu } from "react-icons/tfi";
import { useRouter } from "next/navigation";
import FirstSidebar from "@/components/Header/ui/firstSidebar";


export const products = [
  {
    images: ["/laptop2Deals.png", "/laptop2Deals.png", "/laptop2Deals.png"],
    name: "Samsung Laptop",
    price: "BHD 126",
    category: "Computers",
    subcategory: "Laptops",
    id: "1",
  },
  {
    images: ["/AsusLaptop.png", "/AsusLaptop_2.png", "/AsusLaptop_3.png"],
    name: "Asus Laptop",
    price: "BHD 125",
    category: "Computers",
    subcategory: "Laptops",
    id: "2",
  },
  {
    images: ["/iphone.png"],
    name: "IPhone 13",
    price: "BHD 300",
    category: "Mobiles",
    subcategory: "Iphone",
    id: "3",
  },
  {
    images: ["/MonitorDeals.png"],
    name: "HP5 Monitor",
    price: "BHD 200",
    category: "monitors",
    subcategory: "Laptops",
    id: "4",
  },
];

export default function Component() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const router = useRouter();
  const suggestionMenuRef = useRef<HTMLDivElement>(null);

 
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarVisible]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filteredSuggestions = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionMenuRef.current &&
        !suggestionMenuRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    if (suggestions.length > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [suggestions]);

  const handleSuggestionClick = (suggestion: any) => {
    setSearchQuery(suggestion.name);
    setSuggestions([]); // Clear suggestions after selecting one
    setActiveSuggestionIndex(-1); // Reset active suggestion index
    const { category, subcategory } = suggestion;
    router.push(
      `/products/${category}/${subcategory}?category=${category}&subcategory=${subcategory}`
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        setActiveSuggestionIndex(prevIndex =>
          prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowUp") {
        setActiveSuggestionIndex(prevIndex =>
          prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1
        );
      } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
        handleSuggestionClick(suggestions[activeSuggestionIndex]);
        setActiveSuggestionIndex(-1);
        setSuggestions([]); // Clear suggestions after pressing Enter
      }
    }
  };

  return (
    <header className="bg-black w-full">
      <div className="flex justify-center lg:justify-around tablet:items-baseline lg:max-w-6xl miniphone:max-w-7xl miniphone:items-center mx-auto">
        <div className="flex justify-between items-baseline lg:p-0 px-4">
          <div className="mx-auto flex w-full sm:max-w-6xl miniphone:items-center minitablet:items-baseline tablet:items-baseline sm:
items-baseline justify-around">
<button className="tablet:hidden pr-4" onClick={toggleSidebar}>
  <TfiMenu className="text-white h-7 w-7" />
</button>
<div className="flex items-baseline miniphone:items-center h-20 w-20 lg:h-24 miniscreen:w-24 lg:w-16 miniphone:h-14 phone:h-16 phone:w-11 miniphone:w-11 pt-1 miniphone:mb-6 phone:mb-5 miniphone:mr-2 phone-mr-2">
  <img src="/logo1.png" alt="logo" />
</div>
</div>
<nav className="hidden space-x-4 ml-5 tablet:flex">
<Link
  href="/"
  className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg"
>
  Home
</Link>
<Link
  href="/services"
  className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg"
>
  Services
</Link>
<Link
  href="/blogs"
  className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg"
>
  Blog
</Link>
<Link
  href="/products"
  className="text-white hover:text-gray-300 tablet:text-[12px] sm:text-base lg:text-lg"
>
  Shop
</Link>
</nav>
</div>
<div className="flex justify-center items-center relative tablet:w-60 miniscreen:w-96 lg:w-80 phon:my-0 sm:my-3 miniphone:w-52 miniphone:h-10">
<Input
className="pl-10 w-full"
placeholder="Search"
type="search"
value={searchQuery}
onChange={e => setSearchQuery(e.target.value)}
onKeyDown={handleKeyDown}
/>
<IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
{suggestions.length > 0 && (
<div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10" ref={suggestionMenuRef}>
<ul>
  {suggestions.map((suggestion, index) => (
    <li
      key={index}
      className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
        activeSuggestionIndex === index ? "bg-gray-200" : ""
      }`}
      onClick={() => handleSuggestionClick(suggestion)}
    >
      {suggestion.name}
    </li>
  ))}
</ul>
</div>
)}
</div>
<Link
href="/cart"
className="minitablet:hidden items-baseline miniphone:flex lg:mb-auto tablet:mb-auto text-bottom px-4"
>
<RiShoppingCartLine className="text-white mb-auto miniphone:h-7 miniphone:w-7" />
</Link>
<div className="hidden items-baseline minitablet:flex space-x-4 ml-6 h-full">
<Link
href="/cart"
className="items-baseline lg:mb-auto tablet:mb-auto text-bottom"
>
<RiShoppingCartLine className="text-white lg:h-6 lg:w-6 sm:h-5 sm:w-5" />
</Link>
<Link
href="/sign-in"
className="text-white hover:text-gray-300 minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg"
>
Sign In
</Link>
<Link
href="/about-us"
className="text-white hover:text-gray-300 minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg"
>
About Us
</Link>
<Link
href="/english"
className="text-white hover:text-gray-300 minitablet:text-[13px] tablet:text-[12px] sm:text-base lg:text-lg"
>
English
</Link>
</div>
<FirstSidebar sidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
</div>
</header>
);
}
