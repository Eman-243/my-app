"use client";
import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/navigation';

interface ShopSidebarProps {
  isShopOpen: boolean;
  closeShop: () => void;
  showFirstSidebar: () => void;
}

interface Categories {
  [key: string]: string[];
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({ isShopOpen, closeShop, showFirstSidebar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const handleBackClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null); // Go back to the category view
    } else {
      closeShop();
      showFirstSidebar();
    }
  };

  const categories: Categories = {
    Computers: ['Laptops', 'Desktops', 'Accessories'],
    Electronics: ['Phones', 'Tablets', 'Wearables'],
    // Add more categories and subcategories as needed
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const selectSubcategory = (subcategory: string) => {
    const link = `/products/${selectedCategory}/${subcategory}?category=${selectedCategory}&subcategory=${subcategory}`;
    router.replace(link);
  };

  return (
    <>
      {isShopOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-50 transition-opacity duration-700 ease-in-out" onClick={closeShop}>
          <div className="fixed top-0 left-0 w-10/12 h-full bg-[#faebd7] rounded-lg shadow-lg z-50 transition-transform duration-700 ease-in-out" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-start bg-[#F9B823] p-4 items-center mb-2 hover:border-blue-50" onClick={handleBackClick}>
              <MdOutlineArrowBackIos className="text-black mr-1" />
              <span className="font-bold text-lg">Back</span>
            </div>
            <div>
              {selectedCategory ? (
                <div className="subcategory-list flex flex-col">
                  {categories[selectedCategory].map((subcategory) => (
                    <div className='p-4 miniphone:text-md border-b-[1px] border-white' key={subcategory} onClick={() => selectSubcategory(subcategory)}>
                      {subcategory}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="category-list flex flex-col">
                  {Object.keys(categories).map((category) => (
                    <div className="p-4 miniphone:text-md border-b-[1px] border-white" key={category} onClick={() => selectCategory(category)}>
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopSidebar;
