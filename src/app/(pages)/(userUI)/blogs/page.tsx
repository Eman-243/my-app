"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { BsSortNumericUp } from "react-icons/bs";

export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Exploring the Future of Technology",
            date: "2024-10-10",
            author: "Jane Doe",
            image: "/services/camera.png",
            text: "In this blog post, we delve into the advancements in technology that are shaping our future. From AI to quantum computing, the pace of innovation is accelerating.",
            category: "Technology"
        },
        {
            id: 2,
            title: "Sustainability in Tech",
            date: "2024-10-12",
            author: "John Smith",
            image: "/services/laptop.png",
            text: "Discover how technology is playing a crucial role in promoting sustainability and what more can be done to make tech green.",
            category: "Environment"
        }
    ];


    const [blogs, setBlogs] = useState(blogPosts);
    const [filter, setFilter] = useState('');
    const router = useRouter();

    const [isAscending, setIsAscending] = useState(true);

    const handleSortDate = () => {
      const sortedBlogs = [...blogs].sort((a, b) => {
        return isAscending
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      setBlogs(sortedBlogs);
      setIsAscending(!isAscending); // Toggle the sorting order for the next click
    };

    const handleFilterChange = (category:string) => {
        setFilter(category);
        if (category === 'All Categories') {
          setBlogs(blogPosts); // Assuming blogPosts is the original unfiltered list
        } else {
          const filteredBlogs = blogPosts.filter(blog => blog.category === category);
          setBlogs(filteredBlogs);
        }
      };
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ backgroundImage: 'url("background2.png")'}}>

        <div className="max-w-6xl mx-auto mt-4">
            <div className="flex items-center space-x-4 mb-2">
                <div className='relative rounded-lg  flex flex-col items-center border-2 border-transparent hover:border-[#00C2E4]/25 '>
                <button className='bg-zinc-100 py-1 px-2 rounded-lg' onClick={handleSortDate}>
        {isAscending ? (
            <BsSortNumericDownAlt className='text-black h-8'/>
        ) : (
          <BsSortNumericUp className='text-black h-8' />
        )}
      </button>
                </div>
                <div className='relative rounded-lg w-[170px] flex flex-col items-center mb-2'>
      <button onClick={() => setIsOpen(prev => !prev)} className='flex items-center w-full bg-zinc-100 p-0 pl-2 justify-between text-sm rounded-lg border-2 border-transparent hover:border-[#00C2E4]/25 active:border-[#00C2E4]/25 duration-300 active:text-[#00C2E4]/25'>
        {filter || 'All Categories'}
        {isOpen ? <IoIosArrowUp className='text-black h-8 pr-1' /> : <IoIosArrowDown className='text-black h-8 pr-1' />}
      </button>
      {isOpen && (
        <div className='w-full bg-zinc-100/75 absolute top-12 left-0 rounded-lg border-2 border-transparent hover:border-[#00C2E4]/25 p-2'>
          <p className='text-black text-sm p-2 border-b-2 border-transparent hover:border-white hover:bg-white/75 cursor-pointer rounded-lg' onClick={() => handleFilterChange('All Categories')}>All Categories</p>
          <p className='text-black text-sm p-2 border-b-2 border-transparent hover:border-white hover:bg-white cursor-pointer rounded-lg' onClick={() => handleFilterChange('Technology')}>Technology</p>
          <p className='text-black text-sm p-2 border-b-2 border-transparent hover:border-white hover:bg-white cursor-pointer rounded-lg' onClick={() => handleFilterChange('Environment')}>Environment</p>
        </div>
      )}
    </div>
                <div>
                </div>
            </div>

            {blogs.map((post) => (
                <div key={post.id} className="mb-10 p-6 shadow-lg rounded-lg bg-white cursor-pointer border-2 border-transparent hover:border-[#00C2E4]/25" onClick={() => router.push(`/blogs/${post.id}`)}>
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-gray-900">{post.title}</h2>
                        <p className="text-gray-500">{post.date} by {post.author}</p>
                        <p className="mt-4 text-gray-700">{post.text}</p>
                    </div>
                </div>
            ))}


        </div>
        </div>
    );
}