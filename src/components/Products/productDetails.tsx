"use client";
import React from 'react';

interface ProductDetailProps {
  productId: string | null;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
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

    if (!productId) {
        return <p>Loading...</p>;
    }

    const product = products.find(product => product.id === productId);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.price}</p>
        </div>
    );
}

