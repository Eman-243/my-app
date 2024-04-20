// pages/products/page.tsx
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductsIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push('/productList/Computers/Laptops');
  }, []);

  return null;  // Render nothing
}
