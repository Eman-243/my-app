"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { product_category } from 'prisma/prisma-client';
import axios from 'axios';

export default function Category() {
  const [categories, setCategories] = useState<product_category[]>([])
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  const handleDelete = (id: number) => {
    // Implement the delete functionality here
    console.log(`Delete category with id: ${id}`);
    setCategories(categories.filter(category => category.CategoryId !== id));
  };

  useEffect(() => {
    axios.get('/api/productCategory').then(response => {
      setCategories(response.data.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Link href="/dashboard/Category/add-category">
          <Button>Add Category</Button>
        </Link>
      </div>
      <ul>
        {categories.map(category => (
          <li key={category.CategoryId} className="flex items-center justify-between mb-2 p-2 border rounded">
            <div className='flex flex-col'>
              <span className="text-lg font-bold">Category ID:{category.CategoryId}</span>
              <span className="text-lg">Category Name: {category.CategoryName}</span>
            </div>
            <div className="flex gap-2 flex-col">
              <Button variant="outline" size="sm" onClick={() => router.push(`/dashboard/Category/${category.CategoryId}`)}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(category.CategoryId)} variant="outline" size="sm" color="danger">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
