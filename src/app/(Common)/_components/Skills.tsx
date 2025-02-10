// skills.tsx (React component for skills section)
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs } from 'react-icons/si'; 

const skills = [
  { name: 'JavaScript', icon: <SiJavascript />, level: '85%' },
  { name: 'TypeScript', icon: <SiTypescript />, level: '80%' },
  { name: 'React', icon: <SiReact />, level: '90%' },
  { name: 'Node.js', icon: <SiNodedotjs />, level: '75%' },
  { name: 'MongoDB', icon: <SiMongodb />, level: '70%' },
  { name: 'TailwindCSS', icon: <SiTailwindcss />, level: '90%' },
  { name: 'NextJS', icon: <SiNextdotjs />, level: '60%' },
];

const SkillsSection = () => {
  return (
    <section className="py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-sky-800 mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="text-4xl text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-medium text-gray-700">{skill.name}</h3>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-2">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
