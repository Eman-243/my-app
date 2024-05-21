"use client";
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Ali Ahmed', total: 150, status: 'Shipped' },
    { id: 2, customerName: 'Eman Nayel', total: 250, status: 'Processing' },
    { id: 3, customerName: 'Ahmed', total: 300, status: 'Delivered' },
    // Add more orders as needed
  ]);

  const [users, setUsers] = useState([
    { id: 1, username: 'Ali Ahmed', email: 'ali@example.com', address: '123 Main St', telephone: '123-456-7890' },
    { id: 2, username: 'Eman Nayel', email: 'eman@example.com', address: '456 Oak St', telephone: '987-654-3210' },
    { id: 3, username: 'Ahmed', email: 'ahmed@example.com', address: '789 Pine St', telephone: '555-555-5555' },
    // Add more users as needed
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 },
    // Add more products as needed
  ]);

  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalProducts = products.length;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl">{totalOrders}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl">{totalUsers}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Total Products</h2>
          <p className="text-3xl">{totalProducts}</p>
        </div>
      </div>
    </div>
  );
}
