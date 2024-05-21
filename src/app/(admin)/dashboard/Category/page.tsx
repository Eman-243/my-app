"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Category() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Fashion' },
    { id: 3, name: 'Home' },
    // Add more categories as needed
  ]);

  const router = useRouter();

  const handleDelete = (id: number) => {
    // Implement the delete functionality here
    console.log(`Delete category with id: ${id}`);
    setCategories(categories.filter(category => category.id !== id));
  };

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
          <li key={category.id} className="flex items-center justify-between mb-2 p-2 border rounded">
            <div className='flex flex-col'>
              <span className="text-lg font-bold">Category ID:{category.id}</span>
              <span className="text-lg">Category Name: {category.name}</span>
            </div>
            <div className="flex gap-2 flex-col">
              <Button variant="outline" size="sm" onClick={() => router.push(`/dashboard/Category/${category.id}`)}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(category.id)} variant="outline" size="sm" color="danger">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
