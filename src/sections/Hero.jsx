import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white flex items-center justify-center px-6 pt-24"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#00A9A5] font-semibold text-lg mb-4 tracking-wide">
          Building Software That Solves Real-World Problems
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-[#092327] leading-tight">
          Ayush Nanekar
        </h1>

        <div className="text-2xl md:text-3xl font-semibold text-[#4E8098] mt-6 h-12">
          <TypeAnimation
            sequence={[
              "Aspiring Full Stack Developer",
              2000,
              "AI Enthusiast",
              2000,
              "Problem Solver",
              2000,
              "Computer Engineering Student",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-[#4E8098] text-lg leading-8 mt-8 max-w-2xl mx-auto">
          Passionate about Full Stack Development, Artificial Intelligence,
          Cloud Computing, Photo & Video Editing, and building impactful
          software that solves real-world problems.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-[#00A9A5] text-white font-semibold hover:bg-[#0B5351] hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="/Ayush_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border-2 border-[#00A9A5] text-[#00A9A5] font-semibold hover:bg-[#00A9A5] hover:text-white hover:scale-105 transition-all duration-300"
          >
            View Resume
          </a>

        </div>

      </motion.div>
    </section>
  );
}