import Link from 'next/link';
import { FaProjectDiagram, FaBlog } from 'react-icons/fa';

const DashboardPage = async () => {
    const projectRes = await fetch(`https://portfoliobackend-kappa.vercel.app/api/projects`, {
        next: {
            revalidate: 10
        }
    });
    const project = await projectRes.json();
    const totalProjects = project?.data?.length; 
    const blogRes = await fetch(`https://portfoliobackend-kappa.vercel.app/api/blogs`, {
        next: {
            revalidate: 10
        }
    });
    const blog = await blogRes.json();
    const totalBlogs = blog?.data?.length; 

    return (
        <div className="min-h-screen bg-gradient-to-br py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">Admin Dashboard</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Total Projects Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl flex justify-between items-center transform hover:scale-105 transition-all duration-300 ease-in-out">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold text-sky-800 dark:text-sky-200 flex items-center gap-2">
                                <FaProjectDiagram size={24} /> Total Projects
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Number of projects you have created.</p>
                        </div>
                        <div className="bg-sky-600 text-white p-6 rounded-full">
                            <h3 className="text-3xl font-bold">{totalProjects}</h3>
                        </div>
                    </div>

                    {/* Total Blogs Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl flex justify-between items-center transform hover:scale-105 transition-all duration-300 ease-in-out">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold text-sky-800 dark:text-sky-200 flex items-center gap-2">
                                <FaBlog size={24} /> Total Blogs
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Number of blogs you have written.</p>
                        </div>
                        <div className="bg-sky-600 text-white p-6 rounded-full">
                            <h3 className="text-3xl font-bold">{totalBlogs}</h3>
                        </div>
                    </div>
                </div>

                {/* Optionally, add links to manage projects and blogs */}
                <div className="mt-8 flex justify-center gap-8">
                    <Link href="/projects" className="px-6 py-3 bg-sky-800 text-white rounded-lg font-medium shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500">
                        Manage Projects
                    </Link>
                    <Link href="/blog" className="px-6 py-3 bg-sky-800 text-white rounded-lg font-medium shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500">
                        Manage Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
