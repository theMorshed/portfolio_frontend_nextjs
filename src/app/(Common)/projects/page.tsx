"use client"
import Image from 'next/image';

const projects = [
    {
        title: 'Project One',
        description: 'This is a brief description of the project. It can include the technologies used, the purpose of the project, or a feature overview.',
        image: 'https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png',
        link: '/projects/project-one'
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of the project. It can include the technologies used, the purpose of the project, or a feature overview.',
        image: 'https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png',
        link: '/projects/project-two'
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of the project. It can include the technologies used, the purpose of the project, or a feature overview.',
        image: 'https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png',
        link: '/projects/project-three'
    },
    {
        title: 'Project Four',
        description: 'This is a brief description of the project. It can include the technologies used, the purpose of the project, or a feature overview.',
        image: 'https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png',
        link: '/projects/project-four'
    },
    {
        title: 'Project Five',
        description: 'This is a brief description of the project. It can include the technologies used, the purpose of the project, or a feature overview.',
        image: 'https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png',
        link: '/projects/project-five'
    },
    {
        title: 'Project Six',
        description: 'This is a brief description of the project. It can include the technologies used, the purpose of the project, or a feature overview.',
        image: 'https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png',
        link: '/projects/project-six'
    }
];

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-3xl font-semibold text-sky-800 dark:text-sky-200 text-center mb-10">My Projects</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-300"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-200 group-hover:text-sky-600">{project.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                                <a
                                    href={project.link}
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

export default ProjectsPage;
