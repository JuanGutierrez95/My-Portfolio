import Image from "next/image";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaFileDownload } from "react-icons/fa";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="/images/jg.jpeg"
        alt="profile"
        width={140}
        height={140}
        priority={true}
        className="mx-auto rounded-full "
        quality="100"
      />
      <h3 className="my-4 font-medium tracking-wider text-gray-500 sm:text-2xl font-ubuntu">
        <span className="text-3xl text-blue">Juan Gutiérrez</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Full Stack | Front End Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="\assets\Desarrollador-Front-End-Full-Stack-Juan_Gutierrez_CV.pdf"
        download="Desarrollador-Front-End-Full-Stack-Juan_Gutierrez_CV.pdf"
        aria-label="Resume"
      >
        <FaFileDownload className="w-6 h-6 mx-1 text-blue" />
        Descargar Currículum
      </a>

      <div className="flex justify-around my-5 text-blue w-9/l2 md:w-full">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com/JGutierrez1995_"
          target="_blank"
          aria-label="Twitter"
        >
          <BsTwitter className="w-8 h-8 cursor-pointer" />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://linkedin.com/in/juan-gutierrez95"
          target="_blank"
          aria-label="LinkedIn"
        >
          <BsLinkedin className="w-8 h-8 cursor-pointer" />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/JuanGutierrez95"
          target="_blank"
          aria-label="GitHub"
        >
          <BsGithub className="w-8 h-8 cursor-pointer" />{" "}
        </motion.a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-1 ">
          <GoLocation className="w-6 h-6" />
          <span className="my-2">Buenos Aires, Argentina</span>
        </div>
        <div className="flex justify-center text-blue w-9/l2 md:w-full">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:juan.gutierrez19958@gmail.com"
            target="_blank"
            aria-label="Gmail"
          >
            <SiGmail className="w-8 h-8 mr-4 cursor-pointer" />{" "}
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/541171081812?text=Hola,%20conectate%20conmigo"
            target="_blank"
            aria-label="Whatsapp"
          >
            {" "}
            <BsWhatsapp className="w-8 h-8 ml-4 cursor-pointer" />{" "}
          </motion.a>
        </div>
      </div>
      <button
        onClick={() => window.open("mailto:juan.gutierrez19958@gmail.com")}
        className="w-8/12 px-5 py-2 my-2 bg-black rounded-full dark:text-white bg-gradient-to-r from-blue to-blue-400 focus:outline-none "
      >
        Contactame
      </button>
      <div className="flex items-center justify-center">
        {theme === "light" ? (
          <button
            className="px-5 py-2 my-2 text-4xl text-black rounded-full shadow-md "
            onClick={changeTheme}
          >
            <BsFillMoonStarsFill />
          </button>
        ) : (
          <button
            className="px-5 py-2 my-2 text-4xl text-yellow-400 rounded-full shadow-md "
            onClick={changeTheme}
          >
            <FiSun />
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
