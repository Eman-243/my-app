// Orders.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Img from 'next/image';
import { order } from 'prisma/prisma-client';
import axios from 'axios';

// Define a sample product image URL
const sampleProductImage = '/sample-product-image.jpg';

export default function Orders() {
  const [orders, setOrders] = useState<order[]>([]);
  const [isLoading, setLoading] = useState(true);

  // Fetch orders data
  useEffect(() => {
    axios.get('/api/order').then(response => {
      setOrders(response.data.data);
    });
    setLoading(false);
  }, []);
    

  if (isLoading) {
    return <p>Loading...</p>;
  }

  
  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.OrderId} className="flex items-center justify-between mb-2 p-2 border rounded">
            <div>
              <h3 className="text-lg">Order ID: {order.OrderId}</h3>
              <p>Customer Name: {order.UserID}</p>
              <p>Total: ${order.Total}</p>
              <p>Status: {order.Status}</p>
              {/* Display product images */}

            </div>
            <Link href={`/dashboard/orders/${order.OrderId}`}>
              <Button>View Details</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
