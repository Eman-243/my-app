"use client";
import Sidebar from '@/components/Products/sidebar';
import Topbar from '@/components/Products/topbar';
import Products from '@/components/Products/products';
import { usePathname  } from 'next/navigation';
import { useEffect,useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);
  
  const pathname = usePathname();

  useEffect(() => {
    const pathParts = pathname.split('/');
    const category = pathParts[2];
    const subcategory = pathParts[3];
    const productId = pathParts[4];

    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setProductId(productId);
    window.scrollTo(0, 0);
    // Save the new scroll position
    sessionStorage.setItem('scrollPosition', '0');
}, [pathname]);

  if (productId) {
    return children;
  }

  
  return (
<div className="w-full max-w-6xl mx-auto py-2 box-content grid grid-cols-12 h-full ">
      <div className="col-span-2 w-full h-full">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
        />
      </div>
      <div className="col-span-10 w-full">
        <Topbar />
        <Products 
          selectedCategory={selectedCategory} 
          selectedSubcategory={selectedSubcategory}
        />
        <div className="flex-shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}

//pages/productList/layout.tsx
