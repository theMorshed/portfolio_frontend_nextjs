/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditBlogPage = ({ params }: { params: { blogId: string } }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [isPublished, setIsPublished] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const router = useRouter();

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`/api/blogs/${params.blogId}`);
            const blog = await response.json();

            setTitle(blog.title);
            setContent(blog.content);
            setAuthor(blog.author);
            setIsPublished(blog.isPublished);
        };

        fetchBlog();
    }, [params.blogId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let formErrors: any = {};

        if (!title) formErrors.title = "Title is required.";
        if (!content) formErrors.content = "Content is required.";
        if (!author) formErrors.author = "Author is required.";

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        console.log({
            title,
            content,
            author,
            isPublished,
        });

        router.push("/blogs/manage");
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">
                    Edit Blog
                </h1>

                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="content" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Blog Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                            rows={6}
                        />
                        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="author" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Author Name
                        </label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                        />
                        {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
                    </div>

                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="isPublished"
                            checked={isPublished}
                            onChange={(e) => setIsPublished(e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="isPublished" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Publish Blog
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-sky-800 text-white rounded-lg font-medium shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            Update Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBlogPage;
