"use client";
import { useState } from 'react';

export default function Component() {
  const [expandedCategories, setExpandedCategories] = useState<Array<boolean>>([]);

  const categories = [
    {
      name: 'Computers',
      subcategories: ['Laptops', 'Desktop Laptops', 'IT Equipment', 'By Brand']
    },
    {
      name: 'Mobiles',
      subcategories: ['Iphone', 'Android', 'Mobile accessories', 'By Brand']
    },
    // More categories...
  ];

  const toggleCategory = (index: number) => {
    setExpandedCategories(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full max-w-40 bg-zinc-100 shadow-sm rounded-sm font-sans box-content overflow-auto flex-shrink-0 flex-grow h-full">
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index}>
            <button
              className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 pl-2 pt-2"
              onClick={() => toggleCategory(index)}
            >
              <span>{category.name}</span>
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d={expandedCategories[index] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            {expandedCategories[index] && (
              <div className="mt-2 ml-4 space-y-1 text-sm pl-2 pt-2">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory}>{subcategory}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
