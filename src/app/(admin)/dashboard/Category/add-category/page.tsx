"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';

export default function AddCategory() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleAddCategory = () => {
    axios.post('/api/productCategory', {
      name: name,
    }).then((res) => {
      
      console.log(res);
      router.push('/dashboard/Category');
    });
    // After adding, redirect back to categories page
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Add Category</h2>
      <Input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        className="mb-4"
      />
      <Button onClick={handleAddCategory} variant="default">
        Add Category
      </Button>
    </div>
  );
}
