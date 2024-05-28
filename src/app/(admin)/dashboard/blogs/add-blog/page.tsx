"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Img from 'next/image';

interface Blog {
  id: number;
  name: string;
  username: string;
  text: string;
  picture: string | File;
}

const initialBlogData: Blog[] = [
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

export default function AddBlog() {
  const [blogData, setBlogData] = useState(initialBlogData);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [picture, setPicture] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBlog = () => {
    const newBlog: Blog = {
      id: Date.now(), // Generate a unique ID
      name,
      username,
      text,
      picture: picture ? picture : '', // If no picture is selected, set it to an empty string
    };

    setBlogData([...blogData, newBlog]);
    router.push("/dashboard/blogs");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Blog Name"
        className="mb-4"
      />
      <Input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        className="mb-4"
      />
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Text"
        className="border rounded p-2 w-full mb-4"
        rows={4}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Blog Image</label>
        {imagePreview && <Img src={imagePreview} alt="Blog Image" width={100} height={100} className="my-4 w-32 h-32 object-cover" />}
        <input type="file" onChange={handleImageChange} />
      </div>
      <Button onClick={handleAddBlog} variant="default">
        Add Blog
      </Button>
    </div>
  );
}
