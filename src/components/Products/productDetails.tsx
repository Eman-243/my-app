"use client";
import React, { useEffect, useState } from 'react';
import { GET } from '@/app/api/route';
import { Button } from "@/components/ui/button";

interface Product {
  image: string;
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

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        const fetchedProduct = await GET(productId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  if (!productId) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            alt={product.name}
            className="w-full h-auto object-contain"
            height="500"
            src={product.image}
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-semibold text-yellow-500">{product.price}</span>
            <span className="text-sm">Inclusive of VAT</span>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <Button className="bg-yellow-500 text-white w-full">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
