/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

const BlogPage = async () => {
    const res = await fetch(`https://portfoliobackend-kappa.vercel.app/api/blogs`);
    const blog = await res.json();
    const blogs = blog?.data;    
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">My Blog</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {blogs.map((blog: any) => (
                        <div key={blog._id} className="group relative rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl">
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
                                    href={`/blogs/${blog._id}`}
                                    className="cursor-pointer mt-4 inline-block text-sky-800 dark:text-sky-200 font-medium hover:text-sky-600"
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
