import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#F8FCFF] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <div className="w-[320px] h-80 rounded-xl overflow-hidden border-4 border-[#00A9A5] shadow-2xl">

                      <img
                        src="/profile.jpeg"
                        alt="Ayush Nanekar"
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                      />

                    </div>
                  </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-[#00A9A5] font-semibold">
              About Me
            </p>

            <h2 className="text-5xl font-bold text-[#092327] mt-3">
              Turning Ideas Into Reality Through Code.
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#4E8098]">
              I'm <span className="font-semibold text-[#092327]">Ayush Nanekar</span>,
              a Computer Engineering student passionate about Full Stack
              Development, Artificial Intelligence and Cloud Computing.
              I enjoy building software that solves real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-[#00A9A5]">15+</h3>
                <p>Projects</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-[#00A9A5]">10+</h3>
                <p>Technologies</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-[#00A9A5]">AI</h3>
                <p>Enthusiast</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-[#00A9A5]">Open</h3>
                <p>To Work</p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}