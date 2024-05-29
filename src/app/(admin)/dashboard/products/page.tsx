"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Img from 'next/image';
import { product } from 'prisma/prisma-client';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState<product[]>([]);
  const [isLoading, setLoading] = useState(true);

  const handleDelete = (id: number) => {
    console.log(`Delete product with id: ${id}`);
    axios.delete(`/api/products/${id}`).then(response => {
      setProducts((prevProducts) => prevProducts.filter((product) => product.ProductId !== id));
    });
  };


  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data.data);
    });
    setLoading(false);
  }, []);
    

  if (isLoading) {
    return <p>Loading...</p>;
  }


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
          <li key={product.ProductId} className="flex items-center justify-between mb-2 p-2 border rounded">
            <div className="flex items-center">
              <Img src={product.img || ''} alt={product.ProductName} height={100} width={100} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h3 className="text-lg">{product.ProductName}</h3>
                <p>{product.Short_Description}</p>
                <p>${product.Price}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <Link href={`/dashboard/products/${product.ProductId}`}>
                <Button variant="outline"  className='w-full'>Edit</Button>
              </Link>
              <Button onClick={() => handleDelete(product.ProductId)} variant="outline" color="danger">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
