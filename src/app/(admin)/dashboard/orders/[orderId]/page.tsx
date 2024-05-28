// OrderDetails.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Img from 'next/image';

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

const mockOrderDetails: OrderDetails = {
  id: 1,
  customerName: 'Ali Ahmed',
  total: 150,
  status: 'Shipped',
  products: [
    { id: 1, name: 'Product 1', price: 50, quantity: 1, image: '/sample-product-image1.jpg' },
    { id: 2, name: 'Product 2', price: 100, quantity: 1, image: '/sample-product-image2.jpg' },
  ],
};

export default function OrderDetails() {
  const pathname = usePathname();
  const id = pathname.split('/').pop(); // Extract the last part of the pathname
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch order details using the id
    // For now, we will use mockOrderDetails
    if (id) {
      setOrder(mockOrderDetails); // Replace with actual API call
      setStatus(mockOrderDetails.status);
    }
  }, [id]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSave = () => {
    // Save the new status to the server
    console.log(`Order ${order?.id} status updated to ${status}`);
    // Perform the API call to update the status
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Order Details</h2>
      <div className="mb-4">
        <h3 className="text-lg">Order ID: {order?.id}</h3>
        <p>Customer Name: {order?.customerName}</p>
        <p>Total: ${order?.total}</p>
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
          {order?.products.map(product => (
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
          ))}
        </ul>
      </div>
    </div>
  );
}
