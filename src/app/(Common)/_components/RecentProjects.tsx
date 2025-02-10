/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

const RecentProjects = async () => {
  const res = await fetch(`http://localhost:5000/api/projects`);
  const project = await res.json();
  const projects = project?.data;
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-800 dark:text-gray-200 mb-12">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project: any) => (
            <a key={project._id} href={`/projects/${project._id}`} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;