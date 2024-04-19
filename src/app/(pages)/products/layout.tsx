
import Productdetails from '@/components/Products/productDetails';

export default function ProductDetailLayout({ productId, children }: { productId: string, children: React.ReactNode }) {
  return (
    <div>
      <Productdetails productId={productId} />
      {children}
      
    </div>
  );
}

//products/layout.tsx