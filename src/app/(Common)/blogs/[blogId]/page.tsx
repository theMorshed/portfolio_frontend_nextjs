"use client"
import Image from 'next/image';

// Define a mock data array for your blog posts
const blogs = {
        title: 'Blog Post One',
        description: 'This is a brief description of the blog post. It provides a short summary or excerpt of the content.',
        image: 'https://img.freepik.com/free-photo/female-hands-are-writing-notebook-flat-lay-conceptual-minimalism_169016-18185.jpg?t=st=1739087829~exp=1739091429~hmac=2a4f6692257fbfa23f44486401ff4d7afb1f1e6d4124b19d4cf35a537818726b&w=1380',
        link: '/blog/blog-post-one'
    }

const BlogDetailPage = () => {

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-semibold text-sky-800 dark:text-sky-200">{blogs.title}</h1>
                <Image
                    src={blogs.image}
                    alt={blogs.title}
                    width={800}
                    height={500}
                    className="w-full h-96 object-cover mt-6 rounded-lg"
                />
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">{blogs.description}</p>
            </div>
        </div>
    );
};

export default BlogDetailPage;
