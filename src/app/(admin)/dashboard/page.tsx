"use client";
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Order {
  id: number;
  customerName: string;
  total: number;
  status: string;
  date: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  address: string;
  telephone: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const initialOrders: Order[] = [
  { id: 1, customerName: 'Ali Ahmed', total: 150, status: 'Shipped', date: '2024-05-01' },
  { id: 2, customerName: 'Eman Nayel', total: 250, status: 'Processing', date: '2024-05-05' },
  { id: 3, customerName: 'Ahmed', total: 300, status: 'Delivered', date: '2024-05-10' },
  { id: 4, customerName: 'Sara', total: 400, status: 'Delivered', date: '2024-05-15' },
  { id: 5, customerName: 'John', total: 500, status: 'Processing', date: '2024-05-20' },
  // Add more orders as needed
];

export default function Dashboard() {
  const [orders] = useState<Order[]>(initialOrders);
  const [users] = useState<User[]>([
    { id: 1, username: 'Ali Ahmed', email: 'ali@example.com', address: '123 Main St', telephone: '123-456-7890' },
    { id: 2, username: 'Eman Nayel', email: 'eman@example.com', address: '456 Oak St', telephone: '987-654-3210' },
    { id: 3, username: 'Ahmed', email: 'ahmed@example.com', address: '789 Pine St', telephone: '555-555-5555' },
    // Add more users as needed
  ]);
  const [products] = useState<Product[]>([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 },
    // Add more products as needed
  ]);

  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalProducts = products.length;

  // Define the type for ordersByWeek
  type OrdersByWeek = {
    [key: string]: number;
  };

  // Group orders by week
  const ordersByWeek: OrdersByWeek = orders.reduce((acc: OrdersByWeek, order: Order) => {
    const week = moment(order.date).startOf('week').format('YYYY-MM-DD');
    if (!acc[week]) {
      acc[week] = 0;
    }
    acc[week] += order.total;
    return acc;
  }, {});

  const orderData = {
    labels: Object.keys(ordersByWeek),
    datasets: [
      {
        label: 'Total Orders',
        data: Object.values(ordersByWeek),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Total Orders Per Week</h2>
        <Bar data={orderData} />
      </div>
    </div>
  );
}
