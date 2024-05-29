import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Category {
    id: number;
    name: string;
    parentId: number | null;
}

interface ComponentProps {
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    selectedSubcategory: string | null;
    setSelectedSubcategory: (subcategory: string | null) => void;
}

export default function Component({ setSelectedCategory, setSelectedSubcategory }: ComponentProps) {
    const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('/api/productCategory')
            .then((response) => {
                const fetchedCategories: Category[] = response.data.data.map((category: any) => ({
                    id: category.CategoryId,
                    name: category.CategoryName,
                    parentId: category.parentId,
                }));
                setCategories(fetchedCategories);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
                setError('Failed to fetch categories');
                setLoading(false);
            });
    }, []);

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleCategoryClick = (categoryId: number) => {
        if (expandedCategories.includes(categoryId)) {
            setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
        } else {
            setExpandedCategories([...expandedCategories, categoryId]);
        }
    };

    const handleSubcategoryClick = (category: string, subcategory: string) => {
        setSelectedCategory(category);
        setSelectedSubcategory(subcategory);
        const link = `/products/${category}/${subcategory}?category=${category}&subcategory=${subcategory}`;
        router.replace(link);
    };

    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');

    useEffect(() => {
        if (!category || !subcategory) return;
        setSelectedCategory(category);
        setSelectedSubcategory(subcategory);
        const categoryId = categories.find(cat => cat.name === category)?.id;
        if (categoryId && !expandedCategories.includes(categoryId)) {
            setExpandedCategories([...expandedCategories, categoryId]);
        }
    }, [category, subcategory, categories]);

    if (loading) {
        return         <div className="w-full max-w-50 min-h-screen dark:border-[#5f5f5f] dark:bg-[#424242] bg-zinc-100 border border-transparent shadow-md rounded-sm font-sans box-content overflow-auto flex-shrink-0 flex-grow h-full ">
             <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
                    </div>
                </div>
            </div>
        ;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Filter categories that have a parent category
    const parentCategories = categories.filter(cat => cat.parentId === null);

    return (
        <div className="w-full max-w-50 min-h-screen dark:border-[#5f5f5f] dark:bg-[#424242] bg-zinc-100 border border-transparent shadow-md rounded-sm font-sans box-content overflow-auto flex-shrink-0 flex-grow h-full ">
            <div className='flex items-center p-1'>
                <h1 className="text-lg font-bold pb-4 pt-1 pl-3">Category</h1>
            </div>
            <div className="space-y-4">
                {parentCategories.map((parentCategory) => (
                    <div key={parentCategory.id}>
                        <button
                            className="flex items-center justify-between w-full text-left text-sm font-medium dark:text-white text-gray-900 px-4 pb-1"
                            onClick={() => handleCategoryClick(parentCategory.id)}
                        >
                            <span className='text-[16px] font-semibold'>{parentCategory.name}</span>
                            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d={expandedCategories.includes(parentCategory.id) ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                        {expandedCategories.includes(parentCategory.id) && (
                            <div className="space-y-1 dark:text-white text-sm flex flex-col text-left items-start">
                                {categories
                                    .filter(subcategory => subcategory.parentId === parentCategory.id)
                                    .map((subcategory) => (
                                        <button className='hover:bg-white/50 w-full text-left rounded-md' key={subcategory.id} onClick={() => handleSubcategoryClick(parentCategory.name, subcategory.name)}>
                                            <div className='text-[15px] my-[3px] pl-6'>{subcategory.name}</div>
                                        </button>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
