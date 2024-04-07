import React from "react";

export default function Component() {
  const products = [
    { imageSrc: "/smartphone.png", category: "Phones" },
    { imageSrc: "/laptop1.png", category: "Laptops" },
    { imageSrc: "/tablet1.png", category: "Tablets" },
    { imageSrc: "/watch4.png", category: "Smart Watches" },
  ];

  return (
    <div className="mx-auto my-8 max-w-6xl font-sans">
      <div className="text-center text-2xl font-semibold mb-6 font-sans">Shop with us!</div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {products.slice(0, 3).map((product, index) => (
          <div key={index} className="relative overflow-hidden group shadow-md rounded">
            <img
              src={product.imageSrc}
              alt={`Product ${index + 1}`}
              className="w-full object-cover transform hover:scale-105 hover:opacity-80 group-hover:filter group-hover:blur-sm group-hover:brightness-75 transition-all duration-300"
              style={{ height: "300px" }} // Adjusted height of the image
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xl font-semibold font-Montserrat, sans-serif">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden group shadow-md rounded" style={{ height: "150px" }}> {/* Adjusted height of the parent container */}
        <img
          src={products[3].imageSrc}
          alt={`Product 4`}
          className="w-full h-full object-cover transform hover:scale-105 hover:opacity-80 group-hover:filter group-hover:blur-sm group-hover:brightness-75 transition-all duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-semibold">{products[3].category}</p>
        </div>
      </div>
    </div>
  );
}
