"use client";
import { Bar } from 'react-chartjs-2';
import {useState, useEffect} from 'react'
import axios from 'axios';
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
import { order, product, user } from 'prisma/prisma-client';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

export default function Dashboard() {
  const [orders, setOrders] = useState<order[]>([]);
  const [users, setUsers] = useState<user[]>([]);
  const [products, setProducts] = useState<product[]>([]);

const [isLoading, setLoading] = useState(true);


  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalProducts = products.length;

  // Define the type for ordersByWeek
  type OrdersByWeek = {
    [key: string]: number;
  };

  // Group orders by week
  const ordersByWeek: OrdersByWeek = orders.reduce((acc: OrdersByWeek, order: order) => {
    const week = moment(order.OrderDate).startOf('week').format('YYYY-MM-DD');
    if (!acc[week]) {
      acc[week] = 0;
    }
    if (order.Total !== null) {
      acc[week] += order.Total;
    }
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

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/order',
    }).then((response) => {
      console.log(response.data);
      const fetchedOrders = response.data.data;
      setOrders(fetchedOrders);
    })

    axios({
      method: 'GET',
      url: '/api/users',
    }).then((response) => {
      console.log(response.data);
      const fetchedUsers = response.data.data;
      setUsers(fetchedUsers);
    })

    axios({
      method: 'GET',
      url: '/api/products',
    }).then((response) => {
      console.log(response.data);
      const fetchedProducts = response.data.data;
      setProducts(fetchedProducts);
    })
    setLoading(false)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }



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
