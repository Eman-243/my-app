"use client";
import React from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';


interface IconProps extends React.SVGProps<SVGSVGElement> { }

export const products = [
  {
    images: "/laptop2Deals.png",
    name: "Samsung Laptop",
    price: "BHD 126",
    category: "Computers",
    subcategory: "Laptops",
    id: "1",
  },
  {
    images: "/AsusLaptop.png",
    name: "Asus Laptop",
    price: "BHD 125",
    category: "Computers",
    subcategory: "Laptops",
    id: "2",
  },
  {
    images: "/iphone.png",
    name: "IPhone 13",
    price: "BHD 300",
    category: "phones",  // Add this line
    id: "3",

  },
  {
    images: "/MonitorDeals.png",
    name: "HP5 Monitor",
    price: "BHD 200",
    category: "monitors",  // Add this line
    id: "4",

  },

];


export default function Component() {
    return (
      <div className=" max-w-6xl mx-auto mb-8 font-sans tablet:my-24">
        <h2 className="tablet:text-3xl miniphone:text-xl font-bold mb-6 tablet:text-left miniphone:text-center">Deals</h2>
        <div className="flex flex-wrap justify-center gap-4 ">
          {products.map((product, index) => (
            <Link href={`/productList/${product.category}/${product.subcategory}/${product.id}`} key={product.id}>
              <motion.div className="p-4 border dark:hover:bg-slate-800 dark:bg-slate-800 border-gray-200 rounded-lg shadow-md flex flex-col items-center  w-full sm:w-full miniphone:w-40 dark:border-[#313a51] " whileHover={{
                position: 'relative',
                zIndex: 1,
                
                scale: 1.2,
                transition: {
                  duration: .2
                }
              }}>
                <div className="self-end">
                  <HeartIcon className="text-[#F9B823] w-6 h-6 mb-4" />
                </div>
                <img
                  alt={product.name}
                  className="mb-4"
                  height="150"
                  src={product.images}
                  style={{
                    objectFit: "cover",
                    aspectRatio: "214/150",
                  }}
                  width="200"
                />
                <h3 className="sm:text-lg miniphone:text-sm font-semibold">{product.name}</h3>
                <p className="text-[#F9B823] font-semibold sm:text-base miniphone:text-sm">{product.price}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  

function HeartIcon(props: IconProps) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
