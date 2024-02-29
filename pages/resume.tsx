import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";
import Head from "next/head";
import ResumeContent from "@/components/ResumeContent";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>
          Juan Gutierrez | Resume | Full Stack | Frontend Developer
        </title>
      </Head>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold text-blue-400">Educación</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">Full Stack Web Developer</h5>
            <p className="my-3">
              Henry Bootcamp | 800 horas | Argentina | 2022
            </p>
            <h5 className="my-2 text-lg font-bold">
              Licenciatura en Análisis de Sistemas
            </h5>
            <p className="my-3">Universidad de Buenos Aires | 2020 - 2022</p>
          </div>
          <h5 className="my-3 text-xl font-bold text-blue-400">
            Educacion Complementaria
          </h5>
          <div>
            <h5 className="my-2 text-lg font-bold">
              The Complete Javascript Course
            </h5>
            <p className="my-3">Udemy</p>
            <h5 className="my-2 text-lg font-bold">Escuela de Javascript</h5>
            <p className="my-3">Platzi</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold text-blue-400">
            Experiencia reciente
          </h5>
          <div>
            <ResumeContent />
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">
            Lenguajes y Entornos de Desarrollo
          </h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-xl font-bold">
            Herramientas, Software y Habilidades blandas
          </h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
