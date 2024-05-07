import React, { useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Profile() {
  

    // Array of previous orders
    const previousOrders = [
        { orderNumber: '12345', status: 'shipped', totalAmount: 100 }
        // Add more previous orders as needed
    ];

    return (
        <div className="max-w-5xl h-80	 max-h-dvh bg-zinc-100 shadow-md rounded-sm font-sans ml-2 mt-2   px-4 content-center">
            <div className="grid grid-cols-3 gap-4 justify-between	content-center">
                <div className="col-span-1  rounded-md bg-white border border-gray-300 ">
                    <div className="flex items-center space-x-4 bg-[#FADB92] pl-4 py-2 rounded-md ">
                        <div>
                            <h2 className="text-lg font-semibold">My Information</h2>
                        </div>
                    </div>
                    <div className="mt-4 mb-7 text-black pl-4 rounded-md ">
                        <h2 className="pb-3">Name:</h2>
                        <h2 className="pb-3">Phone Number:</h2>
                        <h2 className="pb-3">Email:</h2>

                    </div>
                </div>
                <div className="col-span-1 border border-gray-300 bg-white rounded-md ">
                    <div className="flex items-center space-x-4 bg-[#FADB92] pl-4 py-2 rounded-md ">
                        <div>
                            <h2 className="text-lg font-semibold">Adress</h2>
                        </div>
                    </div>
                    <div className="mt-4 pl-4 rounded-md text-black">
                        <h2 className="pb-3 ">Area:</h2>
                        <h2 className="pb-3">Building:</h2>
                        <h2 className="pb-3">Block:</h2>
                    </div>
                </div>
                <div className="col-span-1 bg-white border border-gray-300 rounded-md">
          <div className="flex items-center space-x-4 bg-[#FADB92] pl-4 py-2 rounded-sm">
            <div>
              <h2 className="text-lg font-semibold">Previous Orders</h2>
            </div>
          </div>
          <div className="mt-4 pl-4 rounded-md text-black">
            {previousOrders.map((order, index) => (
              <div key={index}>
                <p className="pb-3">Order Number: {order.orderNumber}</p>
                <p className="pb-3">Status: {order.status}</p>
                <p className="pb-3">Total Amount: ${order.totalAmount}</p>
              </div>
            ))}
          </div>
        </div>
            
            </div>
        </div>
    );
}



