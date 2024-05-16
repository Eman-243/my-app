"use client";
import React from 'react';
import { useParams } from 'next/navigation';

const blogPosts = [
    {
        id: '1',
        title: 'Exploring the Future of Technology',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
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

    if (!blog) {
        console.log("Blog ID not found:", blogId);
        return <div>Blog not found</div>;
    }


    return (
        
        <div className="max-w-6xl w-auto mx-auto p-4 flex  flex-col items-center justify-between ">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover object-center"/>

            <div className="bg-white shadow-lg rounded-lg">
                <div className="p-4">
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <span className="text-sm text-gray-600">By {blog.author}<br/></span>
                    <span className="text-sm text-gray-600">{new Date(blog.date).toLocaleDateString()}</span>
                    <p className="text-gray-700 mt-2 leading-relaxed text-base">{blog.description}</p>
                  
                </div>
            </div>
        </div>
    );
}
