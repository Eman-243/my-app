"use client";
import Productdetails from '@/components/Products/productDetails';
import { useParams } from 'next/navigation'; // Import useParams from next/navigation

export default function ProductDetailPage() {
  const { productId } = useParams();

  if (typeof productId !== 'string') {
    return <p>Invalid product ID</p>;
  }

  return <Productdetails productId={productId} />;
}
//app/pages/productList/[categoryId]/[subcategoryId]/[productId]/page.tsx