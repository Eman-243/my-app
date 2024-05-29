"use client";
import React, { useEffect, useState, useRef } from 'react';
import { GET } from '@/app/api/route';
import { Button } from "@/components/Cart/ui/button";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Img from 'next/image';
import axios from 'axios';
import { product } from 'prisma/prisma-client';



interface Product {
  images: string[];
  name: string;
  price: string;
  category: string;
  subcategory?: string;
  id: string;
}

interface ProductDetailProps {
  productId: string | null;
}

interface Comment {
  id: number;
  userName: string;
  comment: string;
  date: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [product, setProduct] = useState<product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('description');
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<{ userName: string, comment: string }>({ userName: '', comment: '' });
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
        // setSelectedImage(response.data.images[0]);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
        // Optionally set an error state and display it in UI
      }
    };
  
    if (productId) {
      console.log('Fetching product details...');
      

    }
  }, [productId]);

  // Function to fetch comments (fake or real)
  const fetchComments = () => {
    // Simulated fake comments
    const fakeComments: Comment[] = [
      { id: 1, userName: "User1", comment: "This product is amazing!", date: "12th June 2021" },
      { id: 2, userName: "User2", comment: "Great quality, worth the price.", date: "12th June 2021" },
      { id: 3, userName: "User3", comment: "I'm satisfied with my purchase.", date: "12th June 2021" },
    ];
    // Update comments state
    setComments(fakeComments);
  };

  // Function to fetch related products
  const fetchRelatedProducts = () => {
    // You need to implement logic to fetch related products based on the current product's subcategory
    // For demonstration purposes, let's assume related products are fetched from a fake list
    
  };

  // Function to handle adding a new comment
  const handleAddComment = () => {
    // Assuming some validation here before adding comment
    if (newComment.userName && newComment.comment) {
      const updatedComments = [...comments];
      const newId = comments.length + 1; // Generate ID for new comment
      updatedComments.push({ id: newId, ...newComment, date: new Date().toLocaleDateString() });
      setComments(updatedComments);
      setNewComment({ userName: '', comment: '' }); // Reset newComment state
    }
  };
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    // console.log(scrollContainer.current); // Check if the ref is attached to the correct element
    if (scrollContainer.current) {
      // console.log(scrollContainer.current.scrollLeft); // Check the initial scroll position
      scrollContainer.current.scrollLeft += scrollOffset;
      // console.log(scrollContainer.current.scrollLeft); // Check the scroll position after scrolling
    }
  };
  if (!productId) {
    console.error('Product ID is missing');
  }
  if (!product) {
    return null;
  }

  return (
    <div className='max-w-6xl mx-auto h-full'>
      <div className=" my-12 rounded-sm font-sans shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white">
            {/* <Img
              alt={product.ProductName}
              className="w-full h-auto object-contain"
              height="500"
              src={selectedImage}
              style={{
                objectFit: "cover",
              }}
              width="500"
            /> */}
            <div className="flex space-x-2 mt-4">
              {/* {product.images.map((image, index) => (
                <Img
                  key={index}
                  alt={product.ProductName}
                  className="w-20 h-20 object-contain cursor-pointer"
                  src={image}
                  onClick={() => setSelectedImage(image)}
                  width={80} height={80}
                />
              ))} */}
            </div>
          </div>
          <div className="space-y-4 bg-zinc-100 border border-transparent dark:border-[#5f5f5f] dark:bg-[#424242] p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold">{product.ProductName}</h1>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-semibold text-[#F9B823]">{product.Price}</span>
                <span className="text-sm">Inclusive of VAT</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            <Button className="bg-[#F9B823] dark:hover:bg-[#F9B823] text-white w-full dark:hover:text-white">Add To Cart</Button>
          </div>
        </div>
      </div>

      {/* Comment section */}
      <div className="mt-8 h-full	">
        <div className="border-b border-gray-200 ">
          <nav className="-mb-px flex justify-center space-x-8">
            <button
              className={`px-1 py-4  text-lg font-medium ${activeTab === 'description' ? 'text-[#F9B823] border-b-2 border-[#F9B823]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-1 py-4 text-lg font-medium ${activeTab === 'reviews' ? 'text-[#F9B823] border-b-2 border-[#F9B823]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </nav>
        </div>

        <div className="mt-4 min-h-64">
          {/* Render comments or input fields for new comment */}
          {activeTab === 'description' ? (
            <div className="text-gray-600 dark:text-gray-300">
              <p className="text-gray-600 dark:text-gray-300">
                Lorem Ipsum is simply dummy text of the printingandtypesetting industryLorem Ipsum has been the
                industrys standard dummy text ever since the 1500s.
              </p>
              {/* Description content */}
            </div>
          ) : (
            <div>
              {/* Render comments */}
              {comments.length > 0 ? (
                comments.map(comment => (
                  <div key={comment.id} className="border-b flex flex-row border-gray-200 pb-4 mb-4">
                    <FaUserCircle className="text-4xl text-gray-500 dark:text-gray-300" />
                    <div className='flex flex-col ml-3'>
                      <div className='flex flex-row items-center'>
                        <p className="text-[16px] text-black font-semibold">{comment.userName}</p>
                        <p className='text-[12px] text-gray-500 dark:text-gray-300 italic ml-2'>{comment.date}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{comment.comment}</p>


                    </div>

                  </div>
                ))
              ) : (
                <div className="text-gray-600 font-semibold text-[16px] mt-2 dark:text-gray-300">
                  No reviews yet. Be the first to review!
                </div>
              )}
              {/* Input fields for new comment */}
              <div className="mt-4 ">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newComment.userName}
                  onChange={e => setNewComment({ ...newComment, userName: e.target.value })}
                  className="border border-gray-300 rounded-md p-2 w-full mb-2"
                />
                <textarea
                  placeholder="Write your review..."
                  value={newComment.comment}
                  onChange={e => setNewComment({ ...newComment, comment: e.target.value })}
                  className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
                />
                <div className='flex justify-end'>
                  <Button onClick={handleAddComment} className="bg-[#F9B823] w-3/12		 dark:hover:bg-[#F9B823] text-white  dark:hover:text-white">Add Comment</Button>

                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-8 font-sans tablet:my-24">
        <h2 className="tablet:text-3xl miniphone:text-xl font-bold mb-6 tablet:text-left miniphone:text-center">Related Products</h2>
        <div className="flex items-center ">
          <Button variant="ghost" onClick={() => scroll(-150)}>
            <IoIosArrowBack className="w-6 h-6" />
          </Button>
          <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide" ref={scrollContainer}>
            {relatedProducts.map((relatedProduct, index) => (
              <Link href={`/products/${relatedProduct.category}/${relatedProduct.subcategory}/${relatedProduct.id}`} key={relatedProduct.id}>
                <motion.div className="p-4  rounded-lg shadow-md my-5 flex flex-col items-center w-full sm:w-full miniphone:w-40 min-h-[300px]" whileHover={{
                  position: 'relative',
                  zIndex: 0.1,
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}>
                  <div className="self-end">
                    <FaRegHeart className="text-[#F9B823] w-6 h-6" />
                  </div>
                  {/* <Img
                    alt={relatedProduct.name}
                    className="mb-4"
                    height="150"
                    src={relatedProduct.images[0]} // Assuming images are available
                    style={{
                      objectFit: "cover",
                      aspectRatio: "214/150",
                    }}
                    width="200"
                  /> */}
                  <h3 className="sm:text-lg miniphone:text-sm font-semibold">{relatedProduct.name}</h3>
                  <p className="text-[#F9B823] font-semibold sm:text-base miniphone:text-sm">{relatedProduct.price}BD</p>
                </motion.div>
              </Link>
            ))}
          </div>
          <Button variant="ghost" onClick={() => scroll(150)}>
            <IoIosArrowForward className="w-6 h-6" />
          </Button>
        </div>
        </div>
    </div>
    </div>
  );
}
