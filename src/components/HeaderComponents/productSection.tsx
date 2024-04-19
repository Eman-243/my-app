"use client";
import React from "react";
import Link from 'next/link';


interface IconProps extends React.SVGProps<SVGSVGElement> {}

const products = [
  {
      image: "/laptop2Deals.png",
      name: "Samsung Laptop",
      price: "BHD 126",
      category: "Computers",  // Add this line
      subcategory: "Laptops",  // Add this line
      id: "1",
      

  },
  {
      image: "/AsusLaptop.png",
      name: "Asus Laptop",
      price: "BHD 125",
      category: "Computers",  // Add this line
      subcategory: "Laptops",  // Add this line
      id: "2",

  },
  {
      image: "/iphone.png",
      name: "IPhone 13",
      price: "BHD 300",
      category: "phones",  // Add this line
      id: "3",

  },
  {
      image: "/MonitorDeals.png",
      name: "HP5 Monitor",
      price: "BHD 200",
      category: "monitors",  // Add this line
      id: "4",

  },
 
  // Add more products here...
];


export default function Component() {
  return (
    <div className="bg-white max-w-6xl mx-auto mb-8 font-sans">
      <h2 className="text-3xl font-bold mb-6">Deals</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            
              <div className="p-4 border border-gray-200 rounded-lg shadow-md flex flex-col items-center dark:border-gray-800">
                <div className="self-end">
                  <HeartIcon className="text-yellow-400 w-6 h-6 mb-4" />
                </div>
                <img
                  alt={product.name}
                  className="mb-4"
                  height="150"
                  src={product.image}
                  style={{
                    aspectRatio: "200/150",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-yellow-400 font-semibold">{product.price}</p>
              </div>
            
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
