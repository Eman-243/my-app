import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFilter } from 'react-icons/fa';
import Select, { SingleValue, MultiValue } from 'react-select';
import Img from 'next/image';
import axios from 'axios';
import { product, product_brand } from 'prisma/prisma-client';

const sortOptions = [
    { value: 'most-relevant', label: 'Most Relevant' },
    { value: 'lowest-price', label: 'Lowest Price' },
    { value: 'highest-price', label: 'Highest Price' },
];

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        backgroundColor: '#fff',
        border: 'none',
        boxShadow: 'none',
        padding: '2px',
        borderRadius: '0.375rem',
    }),
    menu: (provided: any) => ({
        ...provided,
        backgroundColor: '#fff',
        borderRadius: '0.375rem',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#ddd' : state.isFocused ? '#f3f3f3' : '#fff',
        color: state.isSelected ? '#000' : '#333',
    }),
};

export default function ProductList({ selectedCategory, selectedSubcategory }: { selectedCategory: number | null, selectedSubcategory: number | null }) {
    const [isLoading, setIsLoading] = useState(true);
    const [sortType, setSortType] = useState('most-relevant');
    const [filteredProducts, setFilteredProducts] = useState<product[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [products, setProducts] = useState<product[]>([]);
    const [brandOptions, setBrandOptions] = useState<{ value: number, label: string }[]>([]);
    const [categories, setCategories] = useState<{ CategoryId: number, ParentId: number | null }[]>([]);

    useEffect(() => {
        setIsLoading(true);

        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            }
        };

        const fetchBrands = async () => {
            try {
                const response = await axios.get('/api/brands');
                const brands = response.data.data.map((brand: { BrandId: number, BrandName: string }) => ({
                    value: brand.BrandId,
                    label: brand.BrandName
                }));
                setBrandOptions(brands);
            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        }

        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(response.data.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        fetchProducts();
        fetchBrands();
        fetchCategories();
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            let filtered = products;
            if (selectedCategory) {
                filtered = filtered.filter(product => product.CategoryId === selectedCategory);
            }
            if (selectedBrands.length > 0) {
                filtered = filtered.filter(product => selectedBrands.includes(product.BrandId));
            }
            filtered = sortProducts(filtered, sortType);
            setFilteredProducts(filtered);
        };

        applyFilters();
    }, [selectedCategory, selectedSubcategory, sortType, selectedBrands, products]);

    const sortProducts = (products: product[], sortType: string): product[] => {
        switch (sortType) {
            case 'lowest-price':
                return [...products].sort((a, b) => (a.Price || 0) - (b.Price || 0));
            case 'highest-price':
                return [...products].sort((a, b) => (b.Price || 0) - (a.Price || 0));
            case 'most-relevant':
            default:
                return products;
        }
    };

    const getCategoryRoute = (categoryId: number) => {
        const category = categories.find(cat => cat.CategoryId === categoryId);
        if (category?.ParentId) {
            return { parent: category.ParentId, child: categoryId };
        }
        return { parent: categoryId, child: null };
    };

    const handleSortChange = (selectedOption: SingleValue<{ value: string, label: string }>) => {
        if (selectedOption) {
            setSortType(selectedOption.value);
        }
    };

    const handleApplyFilter = () => {
        setShowFilterModal(false);
    };

    const handleResetFilter = () => {
        setSelectedBrands([]);
    };

    if (isLoading) {
        return (
            <div className="max-w-5xl max-h-full min-h-screen bg-zinc-100 shadow-md rounded-sm font-sans miniphone:ml-0 tablet:ml-2 mt-2 flex-shrink-0 flex-grow py-4 px-4">
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="">
            <div className="max-w-5xl max-h-max dark:bg-[#424242] border border-transparent dark:border-[#5f5f5f] bg-zinc-100 miniphone:ml-0 tablet:ml-2 shadow-md rounded-sm font-sans py-1 px-4 flex justify-between items-center">
                <h1 className="text-lg font-bold dark:text-white">Products</h1>
                <div className="flex space-x-4 items-center">
                    <Select
                        options={sortOptions}
                        onChange={handleSortChange}
                        styles={customStyles}
                        defaultValue={sortOptions[0]}
                    />
                    <button onClick={() => setShowFilterModal(true)} className="text-lg dark:text-white">
                        <FaFilter className='text-[#F9B823] hover:text-white ' title="Filter" />
                    </button>
                </div>
            </div>
            <div className='max-w-full max-h-full min-h-screen border border-transparent dark:border-[#5f5f5f] dark:bg-[#424242] bg-zinc-100 shadow-md rounded-sm font-sans miniphone:ml-0 tablet:ml-2 mt-2 flex-shrink-0 flex-grow py-4 px-4'>
                <div className="grid grid-cols-1 miniphone:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto max-h-lvh">
                    {filteredProducts.map((product) => {
                        const route = getCategoryRoute(product.CategoryId);
                        return (
                            <Link href={`/products/${route.parent}/${route.child ?? ''}/${product.ProductId}`} key={product.ProductId} className="w-full rounded-lg sm:w-auto">
                                <div className="border w-full flex flex-col items-center justify-between dark:border-transparent rounded-t-md rounded-b-[10px] dark:bg-[#dddddd] bg-white h-full">
                                    <HeartIcon className="self-end text-[#F9B823] pt-1 pr-1 w-6 h-6" />
                                    <Img
                                        alt={product.ProductName}
                                        className="mb-4"
                                        src={product.img ? product.img : ''}
                                        style={{
                                            aspectRatio: "214/150",
                                            objectFit: "cover",
                                        }}
                                        width={214}
                                        height={150}
                                    />
                                    <div className="grid grid-cols-3 py-[2px] text-center items-baseline justify-between w-full dark:bg-[#dddddd] rounded-full bg-zinc-100 shadow-lg">
                                        <div className='col-span-2 '>
                                            <h2 className="text-sm dark:text-[#424242]">{product.ProductName}</h2>
                                        </div>
                                        <div className="text-[#F9B823] rounded-full dark:bg-[#424242] bg-[#F9B823] w-full text-center items-center col-span-1 py-1">
                                            <p className="text-sm font-medium text-white">{product.Price}BD</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {showFilterModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Filter By</h2>

                        {/* Brand Filter */}
                        <Select
                            options={brandOptions}
                            onChange={(selectedOption: MultiValue<{ value: number, label: string }>) => 
                                setSelectedBrands(selectedOption ? selectedOption.map((option: any) => option.value) : [])
                            }
                            isMulti
                            styles={customStyles}
                        />
                        {/* Filter and Reset Buttons */}
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                onClick={handleApplyFilter}
                            >
                                Apply Filter
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                onClick={handleResetFilter}
                            >
                                Reset to Default
                            </button>
                        </div>
                        <button onClick={() => setShowFilterModal(false)} className="mt-2 text-blue-500">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}
