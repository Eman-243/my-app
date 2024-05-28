// Orders.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Img from 'next/image';

// Define a sample product image URL
const sampleProductImage = '/sample-product-image.jpg';

export default function Orders() {
  const [orders, setOrders] = useState([
    { 
      id: 1, 
      customerName: 'Ali Ahmed', 
      total: 150, 
      status: 'Shipped',
      products: [
        { id: 1, name: 'Product 1', price: 50, quantity: 1, image: sampleProductImage },
        { id: 2, name: 'Product 2', price: 100, quantity: 1, image: sampleProductImage },
      ]
    },
    { 
      id: 2, 
      customerName: 'Eman Nayel', 
      total: 250, 
      status: 'Processing',
      products: [
        { id: 3, name: 'Product 3', price: 80, quantity: 2, image: sampleProductImage },
        { id: 4, name: 'Product 4', price: 170, quantity: 1, image: sampleProductImage },
      ]
    },
    { 
      id: 3, 
      customerName: 'Ahmed', 
      total: 300, 
      status: 'Delivered',
      products: [
        { id: 5, name: 'Product 5', price: 120, quantity: 1, image: sampleProductImage },
        { id: 6, name: 'Product 6', price: 180, quantity: 1, image: sampleProductImage },
      ]
    },
    // Add more orders as needed
  ]);

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="flex items-center justify-between mb-2 p-2 border rounded">
            <div>
              <h3 className="text-lg">Order ID: {order.id}</h3>
              <p>Customer Name: {order.customerName}</p>
              <p>Total: ${order.total}</p>
              <p>Status: {order.status}</p>
              {/* Display product images */}
              <div className="flex">
                {order.products.map(product => (
                  <img key={product.id} src={product.image} alt={product.name} className="w-12 h-12 mr-2" />
                ))}
              </div>
            </div>
            <Link href={`/dashboard/orders/${order.id}`}>
              <Button>View Details</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
