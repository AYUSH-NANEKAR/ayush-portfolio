import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F8FCFF] px-6">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[5px] text-center text-[#00A9A5] font-semibold">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold text-center text-[#092327] mt-3">
          Featured Projects
        </h2>

        <p className="text-center text-[#4E8098] mt-4 mb-16">
          A selection of projects I've built while learning and solving real-world problems.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden h-64">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#092327]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute top-5 left-5 bg-[#008080] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <h3 className="text-3xl font-bold text-[#092327]">
                  {project.title}
                </h3>

                <p className="mt-4 text-[#4E8098] leading-8">
                  {project.description}
                </p>

                {/* TECH */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-[#E8F9F8] text-[#008080] text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#008080] text-white hover:bg-[#0B5351] transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}