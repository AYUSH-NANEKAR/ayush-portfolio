import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <p className="text-center uppercase tracking-[4px] text-[#00A9A5] font-semibold">
          Journey
        </p>

        <h2 className="text-5xl font-bold text-center text-[#092327] mt-3">
          Experience & Education
        </h2>

        <div className="relative mt-16 border-l-4 border-[#00A9A5] ml-4">

          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 ml-10"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-13.25 top-2 w-5 h-5 rounded-full bg-[#00A9A5] border-4 border-white"></div>

              <p className="text-[#00A9A5] font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold text-[#092327] mt-1">
                {item.title}
              </h3>

              <p className="text-[#4E8098] font-medium">
                {item.company}
              </p>

              <p className="text-[#4E8098] mt-3 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}