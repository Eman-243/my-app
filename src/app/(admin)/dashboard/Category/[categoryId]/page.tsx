"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function EditCategory() {
  const pathname = usePathname();
  const id = pathname.split('/').pop() || ''; // Extract id from the end of the pathname, with default value ''
  const [name, setName] = useState('');
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [newSubcategory, setNewSubcategory] = useState('');
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', subcategories: ['Phones', 'Laptops'] },
    { id: 2, name: 'Fashion', subcategories: ['Clothing', 'Shoes'] },
    { id: 3, name: 'Home', subcategories: ['Furniture', 'Decor'] },
    // Add more categories as needed
  ]);

  useEffect(() => {
    if (id) {
      const category = categories.find(category => category.id === parseInt(id));
      if (category) {
        setName(category.name);
        setSubcategories(category.subcategories);
      } else {
        console.log(`Category with id: ${id} not found`);
      }
    }
  }, [id, categories]);

  const handleEditCategory = () => {
    // Implement the logic to edit the category and subcategories
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === parseInt(id)
          ? { ...category, name, subcategories }
          : category
      )
    );
    console.log(`Edit category: ${name}`);
    console.log(`Edit subcategories: ${subcategories}`);
  };

  const handleAddSubcategory = () => {
    if (newSubcategory) {
      setSubcategories([...subcategories, newSubcategory]);
      setNewSubcategory('');
    }
  };

  const handleDeleteSubcategory = (index: number) => {
    setSubcategories(subcategories.filter((_, i) => i !== index));
  };

  const handleEditSubcategory = (index: number, newName: string) => {
    setSubcategories(subcategories.map((sub, i) => (i === index ? newName : sub)));
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Edit Category</h2>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Category Name"
        className="mb-4"
      />
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Subcategories</h3>
        {subcategories.map((subcategory, index) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              value={subcategory}
              onChange={e => handleEditSubcategory(index, e.target.value)}
              className="mr-2"
            />
            <Button onClick={() => handleDeleteSubcategory(index)} variant="outline" size="sm" color="danger">
              Delete
            </Button>
          </div>
        ))}
        <div className="flex items-center mt-2">
          <Input
            value={newSubcategory}
            onChange={e => setNewSubcategory(e.target.value)}
            placeholder="New Subcategory"
            className="mr-2"
          />
          <Button onClick={handleAddSubcategory} variant="default">
            Add Subcategory
          </Button>
        </div>
      </div>
      <Button onClick={handleEditCategory} variant="default">
        Save Changes
      </Button>
    </div>
  );
}
