"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Img from 'next/image';

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300, image: '/images/product3.jpg' },
    // Add more products as needed
  ]);

  const handleDelete = (id: number) => {
    console.log(`Delete product with id: ${id}`);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <Link href="/dashboard/products/add-product">
          <Button>Add Product</Button>
        </Link>
      </div>
      <ul>
        {products.map(product => (
          <li key={product.id} className="flex items-center justify-between mb-2 p-2 border rounded">
            <div className="flex items-center">
              <Img src={product.image} alt={product.name} height={100} width={100} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h3 className="text-lg">{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <Link href={`/dashboard/products/${product.id}`}>
                <Button variant="outline"  className='w-full'>Edit</Button>
              </Link>
              <Button onClick={() => handleDelete(product.id)} variant="outline" color="danger">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
