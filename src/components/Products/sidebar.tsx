// Import necessary hooks and functions from React and Next.js
"use client";
import { useSearchParams } from 'next/navigation'; // Hook to access URL search parameters
import { useState, useEffect } from 'react' // React hooks for managing state and side effects
import { useRouter } from 'next/navigation'; // Hook to access the Next.js router

// Define the props that this component accepts
interface ComponentProps {
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    selectedSubcategory: string | null;
    setSelectedSubcategory: (subcategory: string | null) => void;
}

// Define the component
export default function Component({ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory }: ComponentProps) {
    // State to keep track of which categories are expanded
    const [expandedCategories, setExpandedCategories] = useState<Array<boolean>>([]);

    // Define the categories and their subcategories
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

    // Get the search parameters and router from Next.js
    const searchParams = useSearchParams();
    const router = useRouter();

    // Function to handle when a category is clicked
    const handleCategoryClick = (index: number) => {
        // Create a new copy of the expandedCategories array
        let newExpandedCategories = [...expandedCategories];
        // Toggle the expanded state of the clicked category
        newExpandedCategories[index] = !newExpandedCategories[index];
        // Update the state
        setExpandedCategories(newExpandedCategories);
    };

    // Function to handle when a subcategory is clicked
    const handleSubcategoryClick = (category: string, subcategory: string) => {
        // Update the selected category and subcategory
        setSelectedCategory(category);
        setSelectedSubcategory(subcategory);
        // Build the new URL
        const link = `/products/${category}/${subcategory}?category=${category}&subcategory=${subcategory}`;
        
        // Navigate to the new URL
        router.replace(link);
    };

    // Get the category and subcategory from the URL parameters
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');

    // Use the useEffect hook to update the selected category and subcategory when the URL parameters change
    useEffect(() => {
        // If either the category or subcategory is null, don't do anything
        if (!category || !subcategory) {
            return;
        }
    
        // Log the category and subcategory
        console.log('useEffect running');
        console.log('category from URL:', category);
        console.log('subcategory from URL:', subcategory);
        // Update the selected category and subcategory
        console.log('setting category and subcategory');
        setSelectedCategory(category);
        setSelectedSubcategory(subcategory);
        const categoryIndex = categories.findIndex((cat) => cat.name === category);

        // If the category is found, expand it
        if (categoryIndex !== -1) {
            let newExpandedCategories = [...expandedCategories];
            newExpandedCategories[categoryIndex] = true;
            setExpandedCategories(newExpandedCategories);
        }
    }, [category, subcategory]); // Run this effect whenever the category or subcategory changes


    return (
        <div className="w-full max-w-50 min-h-scree bg-zinc-100 shadow-md rounded-sm font-sans box-content overflow-auto flex-shrink-0 flex-grow h-full ">
            <h1 className="text-lg font-bold pb-4 pt-1 pl-4">Category</h1>
            <div className="space-y-4">
                {categories.map((category, index) => (
                    <div key={index}>
                        <button
                            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 px-4  pb-1"
                            onClick={() => {
                                console.log('category clicked:', category.name);
                                handleCategoryClick(index);
                            }}
                        >
                            <span>{category.name}</span>
                            <svg className="w-5 h-5 text-gray-900 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d={expandedCategories[index] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                        {expandedCategories[index] && (
                            <div className="ml-4 space-y-1 text-sm px-4 flex flex-col text-left items-start">
                                {category.subcategories.map((subcategory) => (
                                    <button key={subcategory} onClick={() => {
                                        console.log('subcategory clicked:', subcategory);
                                        handleSubcategoryClick(category.name, subcategory);
                                    }}>
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