"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';

interface Blog {
    id: number;
    name: string;
    username: string;
    text: string;
    picture: string;
}

const BlogData: Blog[] = [
    {
        id: 1,
        name: "First Blog",
        username: "user1",
        text: "This is the first blog text.",
        picture: "/path/to/picture1.jpg",
    },
    {
        id: 2,
        name: "Second Blog",
        username: "user2",
        text: "This is the second blog text.",
        picture: "/path/to/picture2.jpg",
    },
];

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>(BlogData);
    const [newBlog, setNewBlog] = useState({ name: "", username: "", text: "", picture: "" });
    const router = useRouter();

    const handleDelete = (id: number) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    };

    const handleAdd = () => {
        setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
        setNewBlog({ name: "", username: "", text: "", picture: "" });
    };

    const handleViewEdit = (blog: Blog) => {
        router.push(`/dashboard/blogs/${blog.id}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewBlog({ ...newBlog, [name]: value });
    };

    const navigateToAddProduct = () => {
        router.push('/dashboard/blogs/add-blog'); // Replace '/add-product' with the actual route to the add product page
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Blogs</h2>
            </div>
            <div>
                {blogs.map((blog) => (
                    <div className="flex flex-row justify-between mb-2 p-2 border rounded" key={blog.id} onClick={() => handleViewEdit(blog)} >
                        <div className='flex flex-col'>
                            <span className="text-lg font-bold">Blog ID: {blog.id}</span>
                            <span className="text-lg">Blog Name: {blog.name}</span>
                            <span className="text-lg">Username: {blog.username}</span>
                        </div>

                        <Button onClick={(e) => { e.stopPropagation(); handleDelete(blog.id); }}>Delete</Button>
                    </div>

                ))}
                <Button onClick={navigateToAddProduct}>Add New Blog</Button>

            </div>
        </div>
    );
}
