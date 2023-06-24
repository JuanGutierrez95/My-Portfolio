import { IProject } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";

const ProjectCard: FC<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        width={600}
        height={150}
        priority
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div
          className="p-2 absolute top-0 left-0 z-10 w-full h-auto grid md:p-10 md:grid-cols-2 gap-x-12
      text-black bg-gray-100 dark:text-white dark:bg-dark-100 rounded-lg
      "
        >
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                width={600}
                height={150}
                priority
              />
            </motion.div>

            <motion.div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className=" flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <BsGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className=" flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Proyecto</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => {
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded"
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
