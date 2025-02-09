"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

// Mock data for projects (replace with dynamic data from your API)
const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A description of project one",
        liveLink: "https://www.example.com",
        image: "https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png"
    },
    {
        id: 2,
        title: "Project Two",
        description: "A description of project two",
        liveLink: "https://www.example.com",
        image: "https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png"
    },
    {
        id: 3,
        title: "Project Three",
        description: "A description of project three",
        liveLink: "https://www.example.com",
        image: "https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png"
    },
    {
        id: 4,
        title: "Project Four",
        description: "A description of project four",
        liveLink: "https://www.example.com",
        image: "https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png"
    }
];

const ManageProjectsPage = () => {
    const [projectList, setProjectList] = useState(projects);

    // Function to handle deleting a project
    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            setProjectList(projectList.filter(project => project.id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">
                    Manage Projects
                </h1>

                {/* Table displaying the projects */}
                <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Title</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Description</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Live Link</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Image</th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectList.map((project) => (
                            <tr key={project.id} className="border-t border-gray-200 dark:border-gray-700">
                                <td className="py-4 px-6 text-sm font-medium text-gray-800 dark:text-gray-200">{project.title}</td>
                                <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">{project.description}</td>
                                <td className="py-4 px-6 text-sm text-blue-600 dark:text-blue-400">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{project.liveLink}</a>
                                </td>
                                <td className="py-4 px-6 text-sm">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={100}
                                        height={100}
                                        className="object-cover rounded-md"
                                    />
                                </td>
                                <td className="py-4 px-6 text-sm">
                                    <Link href={`/dashboard/projects/edit/${project.id}`} passHref>
                                        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2 hover:bg-yellow-400 transition-all duration-200">
                                            <FaEdit size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-all duration-200"
                                        onClick={() => handleDelete(project.id)}
                                    >
                                        <FaTrash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Add New Project Button */}
                <div className="mt-8 text-center">
                    <Link
                        href="/dashboard/projects/create"
                        className="px-6 py-3 bg-sky-800 text-white rounded-lg font-medium shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Add New Project
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageProjectsPage;
