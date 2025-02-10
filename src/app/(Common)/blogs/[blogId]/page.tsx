"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogDetailsPage = () => {
    const {blogId} = useParams();
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        category: "",
        image: ""
    });
    // Fetch blog data for editing
    useEffect(() => {
        const fetchBlog = async () => {
            // Example of fetching blog data from API (you'll replace this with actual API call)
            const response = await fetch(`https://portfoliobackend-kappa.vercel.app/api/blogs/${blogId}`);
            const data = await response.json();
            if (data?.success) {
                setBlog(data?.data);            
            }
        };

        fetchBlog();
    }, [blogId]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-semibold text-sky-800 dark:text-sky-200">{blog.title}</h1>
                {blog?.image && (
                    <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={500}
                    className="w-full h-96 object-cover mt-6 rounded-lg"
                />
                )}
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
