"use client";
import React from 'react';
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TbLayoutAlignLeftFilled } from 'react-icons/tb';


interface SecondSidebarProps {
  isDashboardOpen: boolean;
  closeDashboard: () => void;
  showFirstSidebar: () => void;
}

const SecondSidebar: React.FC<SecondSidebarProps> = ({ isDashboardOpen, closeDashboard, showFirstSidebar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const router = useRouter();

  const handleBackClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null); // Go back to the category view
    } else {
      closeDashboard();
      showFirstSidebar();
    }
  };

  

  interface Categories {
    [key: string]: string[];
  }

  const categories: Categories = {
    Computers: ['Laptops', 'Desktops', 'Accessories'],
    // ... other categories
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const selectSubcategory = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    const link = `/products/${selectedCategory}/${subcategory}?category=${selectedCategory}&subcategory=${subcategory}`;
    router.replace(link);
  };

  return (
    <>
      {isDashboardOpen && (
        <div className="fixed inset-0 bg-opacity-50 transition-opacity duration-700 ease-in-out" onClick={closeDashboard}>
             <div className="fixed top-0 left-0 w-10/12 h-full bg-[#faebd7] rounded-lg shadow-lg z-50 transition-transform duration-700 ease-in-out" >
              <div className="flex justify-start bg-[#F9B823] p-4 items-center mb-2 hover:border-blue-50 "onClick={handleBackClick}>
                <MdOutlineArrowBackIos className="text-black mr-1" />
                <span className="font-bold text-lg">Back</span>
              </div>
              <Link href="/profile" className="p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Profile
                <IoIosArrowForward className="text-black" />
              </Link>
              <Link href="/profile/account-information" className="p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Account Information
                <IoIosArrowForward className="text-black" />
              </Link>
              <Link href="/profile/order-history" className="p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Orders History
                <IoIosArrowForward className="text-black" />
              </Link>
            </div> 
        </div>
      )}
    </>
  );
};


export default SecondSidebar;


