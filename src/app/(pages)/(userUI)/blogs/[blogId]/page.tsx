"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Img from 'next/image';
interface blogPost {
    id: string;
    title: string;
    description: string;
    date: string;
}

const blogPosts = [
    {
        id: '1',
        title: 'Exploring the Future of Technology',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        date: '2024-05-10',
        author: 'Jane Doe',
        imageUrl: '/services/amc.png'
    }, {
        id: '2',
        title: 'Exploring the Future of Technology',
        description: 'This article delves into the advancements and future predictions of technology impacting our daily lives.',
        date: '2024-05-10',
        author: 'Jane Doe',
        imageUrl: 'https://example.com/path/to/image.jpg'
    }
    // more blogs...
];

export default function Blog() {
    const { blogId } = useParams();
    const blog = blogPosts.find(b => b.id === blogId);

   
if(!blog)    return (
    <div className="flex flex-col items-center justify-center h-full  m-auto  text-black p-8 rounded-lg">
        <div className="max-w-xl">
        <h2 className="font-sans text-center">Blog Not Found</h2>
        <p className="text-center font-sans mt-2">The Blog you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
    </div>
);;

    return (
        
        <div className="max-w-6xl w-auto mx-auto py-4 flex  flex-col items-center justify-between h-full">
            <Img src={blog.imageUrl} alt={blog.title} width={500} height={500} className="w-full h-full object-cover object-center"/>

            <div className="bg-white dark:border-[#5f5f5f]  dark:bg-transparent mt-2 border border-transparent shadow-lg rounded-lg h-svh">
                <div className="p-4">
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <span className="text-sm text-gray-600 dark:text-gray-300">By {blog.author}<br/></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{new Date(blog.date).toLocaleDateString()}</span>
                    <p className="text-gray-700 mt-2 leading-relaxed text-base dark:text-gray-300">{blog.description}</p>
                  
                </div>
            </div>
        </div>
    );
}
