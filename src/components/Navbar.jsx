import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#008080]/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-[#008080]/60 backdrop-blur-xl py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        <a
          href="#"
          className="text-3xl font-bold text-white"
        >
          AN<span className="text-[#90C2E7]">.</span>
        </a>

        {/* Desktop */}

        <ul className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize transition-all duration-300 ${
                  active === item
                    ? "text-white font-bold"
                    : "text-[#d8ffff] hover:text-white"
                }`}
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-[#008080]/95 backdrop-blur-xl px-6 pb-6">

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block capitalize py-3 text-white hover:text-[#90C2E7]"
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}