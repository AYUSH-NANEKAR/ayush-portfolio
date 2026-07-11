import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_vyh697l",
        "template_zpn6zob",
        form.current,
        "mWyktECUa4nJ-y16g"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#00A9A5] font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-[#092327] mt-3">
            Let's Connect
          </h2>

          <p className="text-[#4E8098] mt-5 max-w-2xl mx-auto">
            Whether you have an internship opportunity, project idea,
            collaboration or just want to say hello, my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >

            <a
              href="mailto:ayushnanekar9@gmail.com"
              className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <FaEnvelope className="text-3xl text-[#00A9A5]" />

              <div>
                <h3 className="font-semibold text-[#092327]">Email</h3>
                <p className="text-[#4E8098]">
                  ayushnanekar9@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+917745065424"
              className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <FaPhoneAlt className="text-3xl text-[#00A9A5]" />

              <div>
                <h3 className="font-semibold text-[#092327]">Phone</h3>
                <p className="text-[#4E8098]">
                  +91 7745065424
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">

              <FaMapMarkerAlt className="text-3xl text-[#00A9A5]" />

              <div>
                <h3 className="font-semibold text-[#092327]">Location</h3>
                <p className="text-[#4E8098]">
                  Pune, Maharashtra, India
                </p>
              </div>

            </div>

            <a
              href="https://github.com/AYUSH-NANEKAR"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <FaGithub className="text-3xl text-[#00A9A5]" />

              <div>
                <h3 className="font-semibold text-[#092327]">GitHub</h3>
                <p className="text-[#4E8098]">
                  github.com/AYUSH-NANEKAR
                </p>
              </div>

            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <FaLinkedin className="text-3xl text-[#00A9A5]" />

              <div>
                <h3 className="font-semibold text-[#092327]">LinkedIn</h3>
                <p className="text-[#4E8098]">
                  linkedin.com/in/ayushnanekar
                </p>
              </div>

            </a>

            <a
              href="/Ayush_Resume.pdf"
              download
              className="flex items-center gap-5 bg-[#008080] text-white p-6 rounded-2xl shadow-lg hover:bg-[#0B5351] transition-all duration-300"
            >
              <FaFileDownload className="text-3xl" />

              <div>
                <h3 className="font-semibold">
                  Download Resume
                </h3>

                <p className="text-sm opacity-90">
                  PDF Format
                </p>
              </div>

            </a>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border mb-5 outline-none focus:border-[#00A9A5]"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border mb-5 outline-none focus:border-[#00A9A5]"
              required
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border mb-6 outline-none focus:border-[#00A9A5]"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#008080] text-white py-4 rounded-xl font-semibold hover:bg-[#0B5351] transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}