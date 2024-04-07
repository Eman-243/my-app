import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const products = [
  {
    imageSrc: "/laptopDeals.png",
    name: "Samsung Laptop",
    price: "1250BD",
  },
  {
    imageSrc: "/laptop2Deals.png",
    name: "Asus Laptop",
    price: "1250BD",
  },
  {
    imageSrc: "/iphone.png",
    name: "iPhone 13",
    price: "300BD",
  },
  {
    imageSrc: "/monitorDeals.png",
    name: "HP flat screen monitor",
    price: "200BD",
  },
];

export default function Component() {
  return (
    <div className="bg-white max-w-6xl mx-auto mb-8 font-sans">
      <h2 className="text-3xl font-bold mb-6">Deals</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-md flex flex-col items-center dark:border-gray-800">
            <div className="self-end">
              <HeartIcon className="text-yellow-400 w-6 h-6 mb-4" />
            </div>
            <img
              alt={product.name}
              className="mb-4"
              height="150"
              src={product.imageSrc}
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-yellow-400 font-semibold">{product.price}</p>
          </div>
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
