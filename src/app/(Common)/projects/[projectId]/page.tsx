"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProjectDetailsPage = () => {
    const {projectId} = useParams();
    const [project, setProject] = useState({
        title: "",
        description: "",
        liveLink: "",
        image: ""
    });
    // Fetch project data for editing
    useEffect(() => {
        const fetchProject = async () => {
            // Example of fetching project data from API (you'll replace this with actual API call)
            const response = await fetch(`https://portfoliobackend-kappa.vercel.app/api/projects/${projectId}`);
            const data = await response.json();
            if (data?.success) {
                setProject(data?.data);            
            }
        };

        fetchProject();
    }, [projectId]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-semibold text-sky-800 dark:text-sky-200">{project.title}</h1>
                {project?.image && (
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-96 object-cover mt-6 rounded-lg"
                />
                )}
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
