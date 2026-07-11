import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#092327] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold">
              Ayush Nanekar
            </h2>

            <p className="text-[#90C2E7] mt-3 max-w-md">
              Computer Engineering Student passionate about
              Full Stack Development, Artificial Intelligence
              and building impactful software.
            </p>

          </div>

          {/* Right */}

          <div className="flex gap-5">

            <a
              href="https://github.com/AYUSH-NANEKAR"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-[#008080] flex items-center justify-center hover:bg-[#00A9A5] transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ayushnanekar"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-[#008080] flex items-center justify-center hover:bg-[#00A9A5] transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ayushnanekar9@gmail.com"
              className="w-12 h-12 rounded-full bg-[#008080] flex items-center justify-center hover:bg-[#00A9A5] transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <hr className="border-[#0B5351] my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-[#90C2E7] text-center">
            © 2026 Ayush Nanekar. All Rights Reserved.
          </p>

          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#008080] flex items-center justify-center hover:bg-[#00A9A5] transition"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
}