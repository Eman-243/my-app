"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'


interface ComponentProps {
    selectedCategory: string | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;

    selectedSubcategory: string | null;
    setSelectedSubcategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Component({ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory }: ComponentProps) {
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
    const router = useRouter();

    const handleCategoryClick = (index: number) => {
        let newExpandedCategories = [...expandedCategories];
        newExpandedCategories[index] = !newExpandedCategories[index];
        setExpandedCategories(newExpandedCategories);
    };

    const handleSubcategoryClick = (category: string, subcategory: string) => {
        setSelectedCategory(category);
        setSelectedSubcategory(subcategory);
        router.replace(`/productList/${category}/${subcategory}`);
    };
    

    useEffect(() => {
        handleSubcategoryClick('Computers', 'Laptops');
    }, []);


    return (
        <div className="w-full max-w-50 min-h-scree bg-zinc-100 shadow-md rounded-sm font-sans box-content overflow-auto flex-shrink-0 flex-grow h-full ">
            <h1 className="text-lg font-bold pb-4 pt-1 pl-4">Category</h1>
            <div className="space-y-4">
                {categories.map((category, index) => (
                    <div key={index}>
                        <button
                            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 px-4  pb-1"
                            onClick={() => handleCategoryClick(index)}
                        >
                            <span>{category.name}</span>
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d={expandedCategories[index] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                        {expandedCategories[index] && (
                            <div className=" ml-4 space-y-1 text-sm px-4 ">
                                {category.subcategories.map((subcategory) => (
                                    <button key={subcategory} onClick={() => handleSubcategoryClick(category.name, subcategory)}>
                                        {subcategory}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

//components/Products/sidebar.tsx