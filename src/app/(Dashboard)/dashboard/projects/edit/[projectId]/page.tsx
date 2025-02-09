/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditProjectPage = ({ params }: { params: { projectId: string } }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [liveLink, setLiveLink] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState<any>({});
    const router = useRouter();

    // Fetch project data for editing
    useEffect(() => {
        const fetchProject = async () => {
            // Example of fetching project data from API (you'll replace this with actual API call)
            const response = await fetch(`/api/projects/${params.projectId}`);
            const project = await response.json();

            setTitle(project.title);
            setDescription(project.description);
            setLiveLink(project.liveLink);
            setImage(project.image);
        };

        fetchProject();
    }, [params.projectId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let formErrors: any = {};

        if (!title) formErrors.title = "Title is required.";
        if (!description) formErrors.description = "Description is required.";
        if (!liveLink) formErrors.liveLink = "Live Link is required.";
        if (!image) formErrors.image = "Image URL is required.";

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Update project data (replace with actual API request)
        console.log({
            title,
            description,
            liveLink,
            image,
        });

        router.push("/projects/manage");
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">
                    Edit Project
                </h1>

                {/* Edit Project Form */}
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Project Title
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
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                            rows={4}
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="liveLink" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Live Link
                        </label>
                        <input
                            type="url"
                            id="liveLink"
                            value={liveLink}
                            onChange={(e) => setLiveLink(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                        />
                        {errors.liveLink && <p className="text-red-500 text-xs mt-1">{errors.liveLink}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="image" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Project Image URL
                        </label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                        />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-sky-800 text-white rounded-lg font-medium shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            Update Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProjectPage;
