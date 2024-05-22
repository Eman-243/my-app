"use client";
import React from 'react';
import  Link  from 'next/link'; // Assuming you are using Next.js for routing
import { IoIosArrowForward } from 'react-icons/io'; // Import necessary icons
import { FaRegUserCircle } from 'react-icons/fa'; // Import necessary icons
import SecondSidebar from './SecondSidebar'; // Import the second sidebar component
import { useState } from 'react'; // Import the useState hook
import ShopSidebar from './ShopSidebar'

interface FirstSidebarProps {
    sidebarVisible: boolean;
    toggleSidebar: () => void;
  }
  
  const FirstSidebar: React.FC<FirstSidebarProps> = ({ sidebarVisible, toggleSidebar }) => {
    const [isDashboardOpen, setDashboardOpen] = useState(false);
    const [isShopOpen, setShopOpen] = useState(false);
  
    const showFirstSidebar = () => {
      setDashboardOpen(false);
      setShopOpen(false);
      toggleSidebar();
    };
    const toggleDashboard = () => {
        setDashboardOpen(!isDashboardOpen);
        setShopOpen(false);  // Ensure ShopSidebar is closed when opening Dashboard
      };
    
      const toggleShop = () => {
        setShopOpen(!isShopOpen);
        setDashboardOpen(false);  // Ensure Dashboard is closed when opening ShopSidebar
      };
  return (
    <>
      {sidebarVisible && (
        <div className="fixed inset-0 bg-opacity-50 transition-opacity duration-700 ease-in-out" onClick={toggleSidebar}>
        <div className="fixed top-0 left-0 w-10/12 h-full bg-[#faebd7] rounded-lg shadow-lg z-50 transition-transform duration-700 ease-in-out" style={{ transform: 'translateX(0)' }}>
          <div className="flex justify-start bg-[#F9B823] pt-[21.5px] pb-[21.5px] items-center mb-2 hover:border-blue-50">
               <FaRegUserCircle className="text-white h-10 w-10 mr-3 ml-3" />
               <Link href="/sign-in" className="text-white text-lg">Sign In</Link>
               </div>
               <Link href="/" className=" p-4 text-lg text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Home
                 <IoIosArrowForward className="text-black" />
               </Link>
               <Link href="/services" className=" text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Services
                 <IoIosArrowForward className="text-black" />
               </Link>
               <Link href="/blogs" className="  text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Blog
                 <IoIosArrowForward className="text-black" />
               </Link>
               <div className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white cursor-pointer "onClick={toggleShop}>
                 Shop
                 <IoIosArrowForward className="text-black" />
               </div>
               <Link href="/about-us" className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">About us
                 <IoIosArrowForward className="text-black" />
               </Link>
               <div  className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white cursor-pointer"  onClick={toggleDashboard}>
                 Dashboard
                 <IoIosArrowForward className="text-black" />
               </div>
               <Link href="/profile" className="text-lg p-4 text-black hover:text-gray-300 flex justify-between border-b-[1px] border-white">Logout
                 <IoIosArrowForward className="text-black" />
               </Link>
             </div>
        </div>
      )}

<SecondSidebar
        isDashboardOpen={isDashboardOpen}
        closeDashboard={() => setDashboardOpen(false)}
        showFirstSidebar={showFirstSidebar}
      />
      <ShopSidebar
        isShopOpen={isShopOpen}
        closeShop={() => setShopOpen(false)}
        showFirstSidebar={showFirstSidebar}
      />
              </>
    
  );
};

export default FirstSidebar;
