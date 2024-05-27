"use client";
import Sidebar from '@/components/Products/sidebar';
import Products from '@/components/Products/products';
import { usePathname, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type CategoryKey = keyof typeof validSubcategories;

const validCategories = ['Computers', 'Mobiles'] as const; // Add all valid categories here
const validSubcategories = {
    Computers: ['Laptops', 'Desktop Laptops', 'IT Equipment', 'By Brand'],
    Mobiles: ['Iphone', 'Android', 'Mobile accessories', 'By Brand']
};
const validProductIds = ['1', '2']; // Replace with actual product IDs or validation logic

function isValidCategory(category: string): category is CategoryKey {
    return validCategories.includes(category as CategoryKey);
}

function isValidSubcategory(category: string, subcategory: string): boolean {
    if (isValidCategory(category)) {
        return validSubcategories[category].includes(subcategory);
    }
    return false;
}

function isValidProductId(productId: string): boolean {
    return validProductIds.includes(productId);
}

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

        // Validate category, subcategory, and productId
        if (category && !isValidCategory(category)) {
            notFound();
            return;
        }
        if (subcategory && !isValidSubcategory(category, subcategory)) {
            notFound();
            return;
        }
        if (productId && !isValidProductId(productId)) {
            notFound();
            return;
        }

        setSelectedCategory(category);
        setSelectedSubcategory(subcategory);
        setProductId(productId);
        window.scrollTo(0, 0);
        // Save the new scroll position
        sessionStorage.setItem('scrollPosition', '0');
    }, [pathname]);

    if (productId && isValidProductId(productId)) {
        return children;
    }

    return (
        <>
            <div className="w-full max-w-6xl mx-auto py-2 box-content grid grid-cols-12 h-full tablet:grid miniphone:hidden">
                <div className="col-span-2 w-full h-full">
                    <Sidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        setSelectedSubcategory={setSelectedSubcategory}
                    />
                </div>
                <div className="col-span-10 w-full">
                    <Products
                        selectedCategory={selectedCategory}
                        selectedSubcategory={selectedSubcategory}
                    />
                    <div className="flex-shrink-0">
                        {children}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto py-2 box-content miniphone:flex tablet:hidden h-full">
                <div className="col-span-10 w-full">
                    <Products
                        selectedCategory={selectedCategory}
                        selectedSubcategory={selectedSubcategory}
                    />
                    <div className="flex-shrink-0">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
//app/pages/(userUI)/products/layout.tsx