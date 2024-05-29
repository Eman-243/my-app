// OrderDetails.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Img from 'next/image';
import { order, order_product, product } from 'prisma/prisma-client';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // Add image property to the Product interface
}

interface OrderDetails {
  id: number;
  customerName: string;
  total: number;
  status: string;
  products: Product[];
}

export default function OrderDetails() {
  const pathname = usePathname();
  const id = pathname.split('/').pop(); // Extract the last part of the pathname
  const [order, setOrder] = useState<order>();
  const [products, setProducts] = useState<product[]>([]);
  const [orderProducts, setOrderProducts] = useState<order_product[]>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`/api/order/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log('Order details:', data.data.order);
          
          setOrder(data.data.order);
          setOrderProducts(data.data.order.orderProducts);
          setProducts
          setStatus(data.data.order.status);
        })
        .catch(error => {
          console.error('Error fetching order details:', error);
        });

      // Fetch products data

      fetch('/api/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data.data);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }, [id]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSave = () => {
    if (order) {
      // Perform the API call to update the status
      fetch(`/api/order/${order.OrderId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(`Order ${order.OrderId} status updated to ${status}`);
        })
        .catch(error => {
          console.error('Error updating order status:', error);
        });
    }
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Order Details</h2>
      <div className="mb-4">
        <h3 className="text-lg">Order ID: {order.OrderId}</h3>
        <p>Customer Name: {order.UserID}</p>
        <p>Total: ${order.Total}</p>
        <p>
          Status:
          <select value={status} onChange={handleStatusChange} className="ml-2 border p-1 rounded">
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </p>
        <button onClick={handleSave} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Products</h3>
        <ul>
          {/* {order.products.map(product => (
            <li key={product.id} className="mb-2 p-2 border rounded">
              <div className="flex items-center">
                <Img src={product.image} alt={product.name} width={100} height={100} className="w-12 h-12 mr-2" />
                <div>
                  <p>Product Name: {product.name}</p>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
