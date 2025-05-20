/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  isPublished: boolean;
};

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://portfoliobackend-kappa.vercel.app/api/blogs");
        const data = await res.json();
        const publishedBlogs = data?.data?.filter((blog: Blog) => blog.isPublished) || [];
        setBlogs(publishedBlogs.slice(0, 3)); // Show latest 3
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 dark:text-gray-400">Loading blogs...</p>;
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-800 dark:text-gray-200 mb-12">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog._id} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800">
                <Link
                  href={`/blogs/${blog._id}`}
                  className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-500 transition-colors block mb-2"
                >
                  {blog.title}
                </Link>
                <div
                  className="text-gray-600 dark:text-gray-400 text-sm prose line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
