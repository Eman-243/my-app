"use client";
import Productdetails from '@/components/Products/productDetails';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const { productId } = params;

  if (typeof productId !== 'string') {
    return <p>Invalid product ID</p>;
  }

  return (
    <div>
      <Productdetails productId={productId} />
      {/* Additional content can be placed here */}
      <div>Additional Content Here</div>
    </div>
  );
}
