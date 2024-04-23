
import React, { useState } from 'react';
import Link from 'next/link';


export default function Component({ selectedCategory, selectedSubcategory }:
     { selectedCategory: string | null, selectedSubcategory: string | null }) {    // Your component code...

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
            {
                image: "/MonitorDeals.png",
                name: "HP1 Monitor",
                price: "BHD 200",
                category: "monitors",  // Add this line
                id: "5",
    
            },
            {
                image: "/MonitorDeals.png",
                name: "HP3 Monitor",
                price: "BHD 200",
                category: "monitors",  // Add this line
                id: "6",
    
            },
            {
                image: "/MonitorDeals.png",
                name: "HP4 Monitor",
                price: "BHD 200",
                category: "monitors",  // Add this line
                id: "7",
    
            },
            // Add more products here...
        ];

    const filteredProducts = products.filter(product => product.category === selectedCategory && product.subcategory === selectedSubcategory);


    return (
        <div className="max-w-5xl max-h-full min-h-screen bg-zinc-100 shadow-md rounded-sm font-sans ml-2 mt-2 flex-shrink-0 flex-grow py-4 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-lvh">

            {filteredProducts.map((product) => (
                <Link href={`/productList/${product.category}/${product.subcategory}/${product.id}`} key={product.id}>
                <div className="border rounded-t-lg rounded-b-[14px] flex flex-col items-center justify-between bg-white w-72 h-72">
            <HeartIcon className="self-end text-yellow-400 pt-1 pr-1 w-6 h-6" />
            <img
                alt={product.name}
                className="mb-4"
                height="150"
                src={product.image}
                style={{
                    aspectRatio: "214/150",
                    objectFit: "cover",
                }}
                width="200"
            />
            <div className="flex justify-between w-full rounded-full bg-zinc-100 shadow-lg align-center items-center pl-3 py-1">
                <h2 className="text-lg ">{product.name}</h2>
                <div className="bg-yellow-400 rounded-full items-center px-4 py-1">
                    <p className="text-sm font-medium text-white">{product.price}</p>
                </div>
            </div>
        </div>
    </Link>
))}


            </div>
        </div>
    )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
    )
}
//components/Products/products.tsx