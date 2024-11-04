import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

export function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-[#0a192f]/90 backdrop-blur-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="flex items-center justify-center text-white text-[18px] font-bold cursor-pointer w-10 h-10 rounded-full bg-purple-500">
            SK
          </span>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-gray-300 hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-white w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X /> : <Menu />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#0a192f] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-poppins font-medium cursor-pointer text-[16px] text-gray-300"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://github.com/shahbazK010"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/iamsahabazkhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="sahabazkhan.771@yahoo.com"
            className="text-gray-300 hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
