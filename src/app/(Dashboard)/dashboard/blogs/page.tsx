"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

// Mock data for blogs (replace with dynamic data from your API)
const blogs = [
    {
        id: 1,
        title: "Understanding React",
        content: "React is a JavaScript library for building user interfaces...",
        image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "React"
    },
    {
        id: 2,
        title: "Node.js for Backend Development",
        content: "Node.js is an open-source, cross-platform runtime environment...",
        image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "Node.js"
    },
    {
        id: 3,
        title: "CSS Flexbox and Grid",
        content: "CSS Flexbox and Grid are powerful layout systems...",
        image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "CSS"
    },
    {
        id: 4,
        title: "Introduction to MongoDB",
        content: "MongoDB is a NoSQL database...",
        image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "Database"
    }
];

const ManageBlogsPage = () => {
    const [blogList, setBlogList] = useState(blogs);

    // Function to handle deleting a blog
    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            setBlogList(blogList.filter(blog => blog.id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">
                    Manage Blogs
                </h1>

                {/* Table displaying the blogs */}
                <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Title</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Category</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Content</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Image</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogList.map((blog) => (
                            <tr key={blog.id} className="border-t border-gray-200 dark:border-gray-700">
                                <td className="py-4 px-6 text-sm font-medium text-gray-800 dark:text-gray-200">{blog.title}</td>
                                <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">{blog.category}</td>
                                <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">{blog.content.slice(0, 50)}...</td>
                                <td className="py-4 px-6 text-sm">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={100}
                                        height={100}
                                        className="object-cover rounded-md"
                                    />
                                </td>
                                <td className="py-4 px-6 text-sm">
                                    <Link href={`/dashboard/blogs/edit/${blog.id}`} passHref>
                                        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2 hover:bg-yellow-400 transition-all duration-200">
                                            <FaEdit size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-all duration-200"
                                        onClick={() => handleDelete(blog.id)}
                                    >
                                        <FaTrash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Add New Blog Button */}
                <div className="mt-8 text-center">
                    <Link
                        href="/dashboard/blogs/create"
                        className="px-6 py-3 bg-sky-800 text-white rounded-lg font-medium shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Add New Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageBlogsPage;
