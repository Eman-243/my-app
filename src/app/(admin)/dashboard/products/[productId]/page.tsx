"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Categories = {
  [key: string]: string[];
};

const categories: Categories = {
  Electronics: ['Mobile Phones', 'Laptops', 'Cameras'],
  Fashion: ['Men', 'Women', 'Kids'],
  Home: ['Furniture', 'Decor', 'Kitchen']
};

export default function EditProduct() {
  const pathname = usePathname();
  const id = pathname.split('/').pop() || ''; // Extract id from the end of the pathname, with default value ''

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100, category: 'Electronics', subCategory: 'Mobile Phones', image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200, category: 'Fashion', subCategory: 'Men', image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300, category: 'Home', subCategory: 'Furniture', image: '/images/product3.jpg' },
    // Add more products as needed
  ]);

  useEffect(() => {
    if (id) {
      const product = products.find(product => product.id === parseInt(id));
      if (product) {
        setProductName(product.name);
        setDescription(product.description);
        setPrice(product.price.toString());
        setCategory(product.category);
        setSubCategory(product.subCategory);
        setImagePreview(product.image);
      } else {
        console.log(`Product with id: ${id} not found`);
      }
    }
  }, [id, products]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setSubCategory(''); // Reset sub-category when category changes
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubCategory(e.target.value);
  };

  const handleEditProduct = () => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === parseInt(id) ? { ...product, name: productName, description, price: parseFloat(price), category, subCategory, image: imagePreview || product.image } : product
      )
    );
    console.log(`Edit product: ${productName}, ${description}, ${price}, ${category}, ${subCategory}`);
    // Set success message
    setSuccessMessage('Product successfully updated!');
    // Clear the success message after a timeout (optional)
    setTimeout(() => setSuccessMessage(null), 3000); // Clear after 3 seconds
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Edit Product</h2>
      {successMessage && <div className="mb-4 text-green-600">{successMessage}</div>}
      <Input
        value={productName}
        onChange={e => setProductName(e.target.value)}
        placeholder="Product Name"
        className="mb-4"
      />
      <Input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        className="mb-4"
      />
      <Input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        className="mb-4"
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      {category && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
          <select
            value={subCategory}
            onChange={handleSubCategoryChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Sub-Category</option>
            {categories[category].map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Product Image</label>
        {imagePreview && <img src={imagePreview} alt="Product Image" className="my-4 w-32 h-32 object-cover" />}
        <input type="file" onChange={handleImageChange} />
      </div>
      <Button onClick={handleEditProduct} variant="default">
        Save Changes
      </Button>
    </div>
  );
}
