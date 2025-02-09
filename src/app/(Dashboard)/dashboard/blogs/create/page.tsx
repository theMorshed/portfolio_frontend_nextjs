/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Dummy function to simulate blog creation (replace with API call)
const createBlog = (blogData: any) => {
    console.log("Blog created:", blogData);
    // After successful creation, you can redirect or show success message
};

const AddNewBlogPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!title || !content || !category || !image) {
            setError("All fields are required.");
            return;
        }

        const blogData = { title, content, category, image };
        createBlog(blogData);

        // After submitting, redirect or reset form
        setTitle("");
        setContent("");
        setCategory("");
        setImage("");
        setError(null);
        router.push("/dashboard/blogs");
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">
                    Add New Blog
                </h1>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 text-red-600 text-center">
                        <p>{error}</p>
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                            placeholder="Enter the blog title"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="content"
                            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                        >
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                            placeholder="Enter the blog content"
                            rows={6}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="category"
                            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                            placeholder="Enter the blog category"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                            placeholder="Enter the image URL"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-sky-800 text-white rounded-lg font-medium shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            Create Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewBlogPage;
