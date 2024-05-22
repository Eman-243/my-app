import React, { useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Profile() {
  

    // Array of previous orders
    const previousOrders = [
        { orderNumber: '12345', status: 'shipped', totalAmount: 100 }
        // Add more previous orders as needed
    ];

    return (
        <div className="mx-auto max-w-5xl p-4 mt-2 bg-zinc-100 shadow-md rounded-sm font-sans">
          <div className="tablet:grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-md bg-white border border-gray-300">
              <div className="flex items-center space-x-4 bg-[#FADB92] p-2 rounded-md">
                <h2 className="text-lg font-semibold">My Information</h2>
              </div>
              <div className="mt-4 mb-7 text-black p-4 rounded-md">
                <h2 className="pb-3">Name:</h2>
                <h2 className="pb-3">Phone Number:</h2>
                <h2 className="pb-3">Email:</h2>
              </div>
            </div>
            <div className="rounded-md bg-white border border-gray-300">
              <div className="flex items-center space-x-4 bg-[#FADB92] p-2 rounded-md">
                <h2 className="text-lg font-semibold">Address</h2>
              </div>
              <div className="mt-4 p-4 rounded-md text-black">
                <h2 className="pb-3">Area:</h2>
                <h2 className="pb-3">Building:</h2>
                <h2 className="pb-3">Block:</h2>
              </div>
            </div>
            <div className="rounded-md bg-white border border-gray-300">
              <div className="flex items-center space-x-4 bg-[#FADB92] p-2 rounded-sm">
                <h2 className="text-lg font-semibold">Previous Orders</h2>
              </div>
              <div className="mt-4 p-4 rounded-md text-black">
                {previousOrders.map((order, index) => (
                  <div key={index} className="pb-3">
                    <p>Order Number: {order.orderNumber}</p>
                    <p>Status: {order.status}</p>
                    <p>Total Amount: ${order.totalAmount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }


