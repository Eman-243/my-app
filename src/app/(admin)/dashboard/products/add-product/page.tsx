"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Img from 'next/image';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [subCategories, setSubCategories] = useState<string[]>([]);

  const router = useRouter();

 
  type Categories = {
    [key: string]: string[];
  };
  const categories: Categories = {
    Electronics: ['Mobile Phones', 'Laptops', 'Cameras'],
    Fashion: ['Men', 'Women', 'Kids'],
    Home: ['Furniture', 'Decor', 'Kitchen']
  };

  useEffect(() => {
    if (category) {
      setSubCategories(categories[category] || []);
      setSubCategory(''); // Reset sub-category when category changes
    }
  }, [category]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddProduct = () => {
    // Implement the logic to add the product
    const newProduct = {
      name,
      description,
      price,
      category,
      subCategory,
      image // You would typically handle image uploading separately
    };
    console.log('Add product:', newProduct);
    // After adding, redirect back to products page
    router.push('/products');
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Add Product</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="mb-4"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="mb-4"
      />
      <Input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        className="mb-4"
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      {subCategories.length > 0 && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Sub-Category</option>
            {subCategories.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Product Image</label>
        {imagePreview && <Img src={imagePreview} alt="Product Image" height={200} width={200} className="my-4 w-32 h-32 object-cover" />}
        <input type="file" onChange={handleImageChange} />
      </div>
      <Button onClick={handleAddProduct} variant="default">
        Add Product
      </Button>
    </div>
  );
}
