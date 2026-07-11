import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-[#092327]">
          Skills
        </h2>

        <p className="text-center text-[#4E8098] mt-4 mb-14">
          Technologies I use to build modern applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#F8FCFF] rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl text-[#00A9A5] flex justify-center mb-4">
                {skill.icon}
              </div>

              <h3 className="font-semibold text-[#092327]">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}