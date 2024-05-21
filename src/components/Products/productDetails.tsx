"use client";
import React, { useEffect, useState } from 'react';
import { GET } from '@/api/route';
import { Button } from "@/components/Cart/ui/button";

interface Product {
  images: string[];
  name: string;
  price: string;
  category: string;
  subcategory?: string;
  id: string;
}

interface ProductDetailProps {
  productId: string | null;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        const fetchedProduct = await GET(productId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setSelectedImage(fetchedProduct.images[0]);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto my-12 rounded-sm font-sans shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white">
          <img
            alt={product.name}
            className="w-full h-auto object-contain"
            height="500"
            src={selectedImage}
            style={{
              
              objectFit: "cover",
            }}
            width="500"
          />
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                alt={product.name}
                className="w-20 h-20 object-contain cursor-pointer"
                src={image}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4 bg-zinc-100 dark:bg-[#030712] border border-transparent dark:border-[#313a51] p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-semibold text-[#F9B823]">{product.price}</span>
              <span className="text-sm">Inclusive of VAT</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
          <Button className="bg-[#F9B823] dark:hover:bg-[#F9B823] text-white w-full dark:hover:text-white">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
//app/components/Products/productDetails.tsx