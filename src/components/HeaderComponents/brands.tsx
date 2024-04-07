"use client";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> { }

export default function Brands() {
  const brands = [
    { alt: "Brand 1", src: "/brands/Dell.png" },
    { alt: "Brand 2", src: "/brands/sam.png" },
    { alt: "Brand 3", src: "/brands/Lenovo.png" },
    { alt: "Brand 4", src: "/brands/apple.png" },
    { alt: "Brand 5", src: "/brands/acer.png" },
    { alt: "Brand 6", src: "/brands/vivo.png" },
    { alt: "Brand 7", src: "/brands/hua.png" },
    { alt: "Brand 8", src: "/placeholder.svg" },
    { alt: "Brand 9", src: "/placeholder.svg" },
    { alt: "Brand 10", src: "/placeholder.svg" },
    { alt: "Brand 11", src: "/placeholder.svg" },

  ];

  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    console.log(scrollContainer.current); // Check if the ref is attached to the correct element
    if (scrollContainer.current) {
      console.log(scrollContainer.current.scrollLeft); // Check the initial scroll position
      scrollContainer.current.scrollLeft += scrollOffset;
      console.log(scrollContainer.current.scrollLeft); // Check the scroll position after scrolling
    }
  };






  return (
    <div className="max-w-6xl mx-auto mb-8 font-sans">
      <h2 className="text-3xl font-bold mb-6">Brands</h2>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => scroll(-150)}>
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide" ref={scrollContainer}>

        {brands.map((brand, index) => (
  <img
    key={index}
    alt={brand.alt}
    className="w-36 h-24 flex-shrink-0"
    height="100"
    src={brand.src}
    style={{
      aspectRatio: "150/100",
      objectFit: "cover",
    }}
    width="150"
  />
))}

        </div>

        <Button variant="ghost" onClick={() => scroll(150)}>
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props: IconProps) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: IconProps) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
