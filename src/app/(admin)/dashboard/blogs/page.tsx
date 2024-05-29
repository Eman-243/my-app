"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { blog } from "prisma/prisma-client";
import axios from 'axios';



export default function Blogs() {
    const [blogs, setBlogs] = useState<blog[]>([]);
    const [newBlog, setNewBlog] = useState({ name: "", username: "", text: "", picture: "" });
    const router = useRouter();
    const [isLoading, setLoading] = useState(true);

    const handleDelete = (id: number) => {
        axios.delete(`/api/blog/blogs/${id}`).then(response => {
            setBlogs(blogs.filter(blog => blog.BlogID !== id));
        });
    };



    const handleViewEdit = (blog: blog) => {
        router.push(`/dashboard/blogs/${blog.BlogID}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewBlog({ ...newBlog, [name]: value });
    };

    const navigateToAddProduct = () => {
        router.push('/dashboard/blogs/add-blog'); // Replace '/add-product' with the actual route to the add product page
    };

    useEffect(() => {
        axios.get('/api/blog/blogs').then(response => {
          setBlogs(response.data.data);
          setLoading(false);
        });
      }, []);
    
      if (isLoading) {
        return <p>Loading...</p>;
      }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Blogs</h2>
            </div>
            <div>
                {blogs.map((blog) => (
                    <div className="flex flex-row justify-between mb-2 p-2 border rounded" key={blog.BlogID} onClick={() => handleViewEdit(blog)} >
                        <div className='flex flex-col'>
                            <span className="text-lg font-bold">Blog ID: {blog.BlogID}</span>
                            <span className="text-lg">Blog Name: {blog.BlogName}</span>
                            <span className="text-lg">Username: {blog.UserID}</span>
                        </div>

                        <Button onClick={(e) => { e.stopPropagation(); handleDelete(blog.BlogID); }}>Delete</Button>
                    </div>

                ))}
                <Button onClick={navigateToAddProduct}>Add New Blog</Button>

            </div>
        </div>
    );
}
