
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Component({ selectedCategory, selectedSubcategory }:
    { selectedCategory: string | null, selectedSubcategory: string | null }) {    // Your component code...
    const [isLoading, setIsLoading] = useState(true); // Add this line


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
            category: "Mobiles",  // Add this line
            subcategory: "Iphone",  //Add this line
            id: "3",

        },
        {
            image: "/MonitorDeals.png",
            name: "HP5 Monitor",
            price: "BHD 200",
            category: "Computers",  // Add this line
            subcategory: "Desktop Laptops",
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
    useEffect(() => {
        setIsLoading(false); // Update the loading state when the products are ready
    }, [selectedCategory, selectedSubcategory]);
    let filteredProducts: typeof products = [];

    if (selectedCategory && selectedSubcategory) {
        filteredProducts = products.filter(product => product.category === selectedCategory && product.subcategory === selectedSubcategory);
    }
    else {
        filteredProducts = products;
    }
    if (isLoading) {
        return (
            <div className="max-w-5xl max-h-full min-h-screen bg-zinc-100 shadow-md rounded-sm font-sans miniphone:ml-0 tablet:ml-2 mt-2 flex-shrink-0 flex-grow py-4 px-4">

                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
                    </div>
                </div>

            </div>
        )
    }
    return (
        <div className="max-w-full  max-h-full min-h-screen border border-transparent dark:border-[#5f5f5f]  dark:bg-[#424242] bg-zinc-100 shadow-md rounded-sm font-sans miniphone:ml-0 tablet:ml-2 mt-2 flex-shrink-0 flex-grow py-4 px-4">
          <div className="grid grid-cols-1 miniphone:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto max-h-lvh">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.category}/${product.subcategory}/${product.id}`} key={product.id} className="w-full rounded-lg sm:w-auto">
                <div className="border w-full flex flex-col items-center justify-between dark:border-transparent rounded-t-md rounded-b-[10px] dark:bg-[#dddddd] bg-white h-full">
                  <HeartIcon className="self-end text-[#F9B823] pt-1 pr-1 w-6 h-6" />
                  <img
                    alt={product.name}
                    className="mb-4"
                    src={product.image}
                    style={{
                      aspectRatio: "214/150",
                      objectFit: "cover",
                    
                    }}
                  />
                  <div className="grid grid-cols-3 py-[2px] text-center items-baseline justify-between w-full dark:bg-[#dddddd] rounded-full bg-zinc-100 shadow-lg  ">
                    <div className='col-span-2 '>
                    <h2 className="text-sm  dark:text-[#424242]">{product.name}</h2>

                    </div>
                    <div className="text-[#F9B823] rounded-full dark:bg-[#424242] bg-[#F9B823] w-full text-center items-center col-span-1 py-1">
                      <p className="text-sm font-medium text-white">{product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
      
      
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