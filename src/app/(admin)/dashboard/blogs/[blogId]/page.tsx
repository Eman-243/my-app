"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Img from "next/image";

interface Blog {
  id: number;
  name: string;
  username: string;
  text: string;
  picture: string | File;
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

export default function BlogDetails() {
  const pathname = usePathname();
  const router = useRouter();
  const blogId = parseInt(pathname.split("/").pop() || "", 10);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchedBlog = BlogData.find((b) => b.id === blogId);
    if (fetchedBlog) {
      setBlog(fetchedBlog);
      setImagePreview(typeof fetchedBlog.picture === 'string' ? fetchedBlog.picture : null);
    } else {
      router.push("/dashboard/blogs"); // Redirect if blog not found
    }
  }, [blogId, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (blog) {
      setBlog({ ...blog, [name]: value });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBlog((prevBlog) => prevBlog ? { ...prevBlog, picture: file } : null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Update the blog data with the new values (you might want to send this to a server)
    console.log("Saved blog:", blog);
    // Set success message
    setSuccessMessage("Blog successfully updated!");
    // Clear the success message after a timeout (optional)
    setTimeout(() => setSuccessMessage(null), 3000); // Clear after 3 seconds
    // Redirect back to blogs page or show a success message
    router.push("/dashboard/blogs");
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
      {successMessage && <div className="mb-4 text-green-600">{successMessage}</div>}
      <Input
        value={blog.name}
        onChange={handleInputChange}
        name="name"
        placeholder="Blog Name"
        className="mb-4"
      />
      <Input
        value={blog.username}
        onChange={handleInputChange}
        name="username"
        placeholder="Username"
        className="mb-4"
      />
      <textarea
        value={blog.text}
        onChange={handleInputChange}
        name="text"
        placeholder="Text"
        className="border rounded p-2 w-full mb-4"
        rows={4}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Blog Image</label>
        {imagePreview && <Img src={imagePreview} alt="Blog Image" width={100} height={100} className="my-4 w-32 h-32 object-cover" />}
        <input type="file" onChange={handleImageChange} />
      </div>
      <Button onClick={handleSave} variant="default">
        Save Changes
      </Button>
    </div>
  );
}
