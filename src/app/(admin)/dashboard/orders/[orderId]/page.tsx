// Orders.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Ali Ahmed', total: 150, status: 'Shipped' },
    { id: 2, customerName: 'Eman Nayel', total: 250, status: 'Processing' },
    { id: 3, customerName: 'Ahmed', total: 300, status: 'Delivered' },
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
            </div>
            <Link href={`/admin/dashboard/orders/${order.id}`}>
              <a className="text-blue-500">View Details</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
