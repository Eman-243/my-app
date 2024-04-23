"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductDetails from '@/components/Products/productDetails';

interface ProductDetailLayoutProps {
  children: React.ReactNode;
  productId: string;
}

export default function ProductDetailPage({ productId }: { productId: string }) {
  return (
    <div className="w-full max-w-6xl mx-auto py-2 box-content grid grid-cols-12 h-full ">
      <div className="col-span-12 w-full">
        <ProductDetails productId={productId} />
        <div className="flex-shrink-0">
        </div>
      </div>
    </div>
  );
}

//pages/productList/[categoryId]/[subcategoryId]/[productId]/ProductDetailLayout.tsx