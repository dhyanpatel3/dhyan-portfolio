import { div } from "framer-motion/client";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsTwitterX,
  BsX,
  BsYoutube,
} from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-10 py-3 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-4xl font-semibold transition-opacity duration-300 hover:opacity-100 inline-block animate-rotate-pause"
      >
        {"</>"}
      </a>

      <ul className="hidden md:flex gap-14 ml-20">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li >Home</li>
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "
        >
          <li>Tech</li>
        </a>

        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500">
          <a
            href="https://www.instagram.com/dhyann.patel/"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500">
          <a
            href="https://www.linkedin.com/in/dhyan-patel3/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500">
          <a
            href="https://x.com/dhyannpatel"
            target="_blank"
          >
            <BsTwitterX />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500">
          <a href="https://github.com/dhyanpatel3" target="_blank">
            <BsGithub />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[65px] flex h-screen w-1/2 flex-col item-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={() => setIsOpen(false)}
            >
              <li>Home</li>
            </a>

            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={() => setIsOpen(false)}
            >
              <li>Tech</li>
            </a>

            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={() => setIsOpen(false)}
            >
              <li>Projects</li>
            </a>

            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={() => setIsOpen(false)}
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-10">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500">
            <a
            href="https://www.instagram.com/dhyann.patel/"
            target="_blank"
          >
            <BsInstagram />
          </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500">
            <a
            href="https://www.linkedin.com/in/dhyan-patel3/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500">
            <a
            href="https://x.com/dhyannpatel"
            target="_blank"
          >
            <BsTwitterX />
          </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500">
            <a href="https://github.com/dhyanpatel3" target="_blank">
            <BsGithub />
          </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
