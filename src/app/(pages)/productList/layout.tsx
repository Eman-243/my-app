"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/Products/sidebar';
import Products from '@/components/Products/products';
import Topbar from '@/components/Products/topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  
  const pathname = usePathname();

  // On component mount, set the category and subcategory from the URL
  useEffect(() => {
    const pathParts = pathname.split('/');
    
    // The category is the third part of the path (after /productList/)
    const category = pathParts[2];

    // The subcategory is the fourth part of the path
    const subcategory = pathParts[3];

    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  }, [pathname]);

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
