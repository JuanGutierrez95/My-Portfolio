import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../data";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";
import { stagger } from "@/animations";
import Head from "next/head";

const Home = ({ endpoint }: { endpoint: string }) => {
  //console.log(endpoint);
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>
          Juan Gutierrez | Portfolio | Full Stack | Front End Developer
        </title>
      </Head>
      <h5 className="my-3 font-medium text-justify text-md">
        Full Stack Developer especializado en tecnologías modernas, con
        experiencia en la creación de soluciones web eficientes y escalables.
        Poseo habilidades solidas en el desarrollo tanto del Front End como del
        Back End, lo que me permite trabajar eficazmente en un entorno
        colaborativo. Soy un excelente comunicador, líder de equipo y
        organizado, con amplio conocimiento en metodologías agiles como Scrum,
        así como en Git y estructura de datos. Mi experiencia incluye el trabajo
        con JavaScript, React, Node.Js y otras tecnologías relevantes en el
        sector. Tengo capacidad para resolver problemas, trabajar en equipo,
        adaptarme a nuevas situaciones y aprender de manera autónoma.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">Lo que ofrezco</h4>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;


export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  //console.log(process.env.VERCEL_URL)
  const endpoint =
    process.env.VERCEL_URL || "http://localhost:300/api/services";
  //console.log(endpoint);
  return { props: { services: endpoint } };
};

/*
export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const res = await fetch("http://localhost:3000/api/services");
    const data = await res.json();
    
    console.log("SERVER", services);
    return {
      props: {
        services: data.services,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        services: [],
      },
    };
  }
};
*/