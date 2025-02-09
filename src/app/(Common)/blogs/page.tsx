"use client"
import Image from 'next/image';

const blogs = [
    {
        title: 'Blog Post One',
        description: 'This is a brief description of the blog post. It provides a short summary or excerpt of the content.',
        image: 'https://img.freepik.com/free-photo/female-hands-are-writing-notebook-flat-lay-conceptual-minimalism_169016-18185.jpg?t=st=1739087829~exp=1739091429~hmac=2a4f6692257fbfa23f44486401ff4d7afb1f1e6d4124b19d4cf35a537818726b&w=1380',
        link: '/blogs/blog-post-one'
    },
    {
        title: 'Blog Post Two',
        description: 'This is a brief description of the blog post. It provides a short summary or excerpt of the content.',
        image: 'https://img.freepik.com/free-photo/female-hands-are-writing-notebook-flat-lay-conceptual-minimalism_169016-18185.jpg?t=st=1739087829~exp=1739091429~hmac=2a4f6692257fbfa23f44486401ff4d7afb1f1e6d4124b19d4cf35a537818726b&w=1380',
        link: '/blogs/blog-post-two'
    },
    {
        title: 'Blog Post Three',
        description: 'This is a brief description of the blog post. It provides a short summary or excerpt of the content.',
        image: 'https://img.freepik.com/free-photo/female-hands-are-writing-notebook-flat-lay-conceptual-minimalism_169016-18185.jpg?t=st=1739087829~exp=1739091429~hmac=2a4f6692257fbfa23f44486401ff4d7afb1f1e6d4124b19d4cf35a537818726b&w=1380',
        link: '/blogs/blog-post-three'
    },
    {
        title: 'Blog Post Four',
        description: 'This is a brief description of the blog post. It provides a short summary or excerpt of the content.',
        image: 'https://img.freepik.com/free-photo/female-hands-are-writing-notebook-flat-lay-conceptual-minimalism_169016-18185.jpg?t=st=1739087829~exp=1739091429~hmac=2a4f6692257fbfa23f44486401ff4d7afb1f1e6d4124b19d4cf35a537818726b&w=1380',
        link: '/blogs/blog-post-four'
    }
];

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">My Blog</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-300"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-200 group-hover:text-sky-600">{blog.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{blog.description}</p>
                                <a
                                    href={blog.link}
                                    className="mt-4 inline-block text-sky-800 dark:text-sky-200 font-medium hover:text-sky-600"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
