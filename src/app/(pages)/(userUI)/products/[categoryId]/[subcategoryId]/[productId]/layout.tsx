import { ReactNode } from 'react';

interface ProductDetailLayoutProps {
  children: ReactNode;
}

export default function ProductDetailLayout({ children }: ProductDetailLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
