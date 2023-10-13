import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./types";
import { FaServer } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import {
  MdDeveloperMode,
  MdLanguage,
  MdOutlineLeaderboard,
} from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJirasoftware,
  SiMongodb,
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import { IoIosChatboxes } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Front End Developer",
    about:
      "Empleo <b>React, Redux, Redux-Toolkit, TypeScript y Tailwind CSS</b> para crear experiencias de usuario dinámicas, eficientes y estilizadas.",
  },
  {
    Icon: FaServer,
    title: "Back End Developer",
    about:
      "Utilizo <b>Node.js</b> y <b>Express</b> para construir <b>APIs</b> y servidores escalables, trabajando con bases de datos para asegurar el almacenamiento y manejo eficiente de los datos.",
  },
  {
    Icon: DiScrum,
    title: "Methodology",
    about:
      "Adopto la <b>metodología ágil Scrum</b> para gestionar y entregar proyectos de manera iterativa, colaborativa y con enfoque en la entrega de valor continuo.",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "<b>Solucionador de problemas diarios, aprendiz rápido, muy apasionado por la codificación y me encanta asumir tareas desafiantes.</b>",
  },
  {
    Icon: BiTestTube,
    title: "e2e Testing & Unit Tests",
    about:
      "Puedo crear pruebas e2e usando <b>Cypress</b> y pruebas unitarias usando <b>Jest & React Testing Library.</b>",
  },
];

export const languages: ISkill[] = [
  {
    Icon: SiJavascript,
    name: "Javascript",
    level: "85%",
  },
  {
    Icon: SiTypescript,
    name: "Typescript",
    level: "70%",
  },
  {
    Icon: SiRedux,
    name: "Redux & Redux-Toolkit",
    level: "75%",
  },
  {
    Icon: SiReact,
    name: "React",
    level: "80%",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    level: "80%",
  },
  {
    Icon: SiNodedotjs,
    name: "Node.Js",
    level: "80%",
  },
  {
    Icon: SiExpress,
    name: "Express",
    level: "80%",
  },
  {
    Icon: SiBootstrap,
    name: "Bootstrap",
    level: "70%",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.Js",
    level: "75%",
  },
  {
    Icon: SiHtml5,
    name: "HTML5",
    level: "80%",
  },
  {
    Icon: SiCss3,
    name: "CSS3",
    level: "80%",
  },
  {
    Icon: SiJest,
    name: "Jest",
    level: "45%",
  },
];

export const tools: ISkill[] = [
  {
    Icon: SiGit,
    name: "Git & GitHub",
    level: "90%",
  },
  {
    Icon: DiScrum,
    name: "Scrum",
    level: "85%",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    level: "80%",
  },
  {
    Icon: SiPostgresql,
    name: "PostgreSQL",
    level: "70%",
  },
  {
    Icon: MdOutlineLeaderboard,
    name: "Liderazgo",
    level: "90%",
  },
  {
    Icon: IoIosChatboxes,
    name: "Comunicación",
    level: "100%",
  },
  {
    Icon: AiOutlineTeam,
    name: "Trabajo en Equipo",
    level: "100%",
  },
  {
    Icon: SiJirasoftware,
    name: "Jira",
    level: "75%",
  },
  {
    Icon: SiTrello,
    name: "Trello",
    level: "90%",
  },
  {
    Icon: MdLanguage,
    name: "Español",
    level: "100%",
  },
  {
    Icon: MdLanguage,
    name: "Inglés",
    level: "40%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "My Portfolio",
    description:
      "Portfolio web desarrollado con React, Typescript, Next.js y TailwindCSS. Incluye mi experiencia, educacion, currículum, habilidades y proyectos.",
    image_path: "/images/myportfolio.jpeg",
    deployed_url: "https://juangutierrezportfolio.vercel.app/",
    github_url: "https://github.com/JuanGutierrez95/My-Portfolio",
    category: ["React", "Next.Js", "Tailwind CSS", "Typescript"],
    key_techs: ["React", "Next.Js", "Tailwind CSS", "Typescript"],
  },
  {
    id: 2,
    name: "Marketplace Sport Planet",
    description:
      "Diseñar y desarrollar una aplicación de Marketplace utilizando tecnologías y herramientas de vanguardia para brindar una experiencia de usuario completa y funcional. Implementación de funcionalidades avanzadas como autenticación de usuarios, procesamiento de pagos, diseño de interfaz, gestión de base de datos y seguridad de datos. Desarrollo de características clave como búsquedas, filtrados combinados, ordenamientos, baneo de usuarios y envío de emails, utilizando pasarela de pagos (Mercado Pago). Colaboración en un entorno ágil y orientado al logro de objetivos.",
    image_path: "/images/sportplanet.jpeg",
    deployed_url: "https://sport-planet.vercel.app/",
    github_url: "https://github.com/JuanGutierrez95/SportPlanet-",
    category: ["React", "Javascript", "Tailwind CSS", "CSS"],
    key_techs: [
      "Javascript",
      "React",
      "Redux",
      "Node.Js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Auth0",
      "Tailwind CSS",
      "CSS",
    ],
  },
  {
    id: 3,
    name: "App Pokemon",
    description:
      "Diseñar y desarrollar una aplicación web de Pokémon utilizando tecnologías y herramientas modernas para ofrecer una experiencia de usuario interactiva y atractiva. Implementación de funcionalidades como búsquedas, filtrados combinados, ordenamientos, formulario controlado, paginado y detalles con información relevante de cada Pokémon. Colaboración en un entorno ágil y orientado a la consecución de objetivos, siguiendo buenas prácticas de desarrollo y diseño.",
    image_path: "/images/pokemon.jpeg",
    github_url: "https://github.com/JuanGutierrez95/POKEMON",
    category: ["React", "Javascript", "CSS"],
    key_techs: [
      "Javascript",
      "React",
      "Redux",
      "Node.Js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
  },
  {
    id: 4,
    name: "App Weather",
    description:
      "Diseñar y desarrollar una aplicación web de clima utilizando tecnologías y herramientas modernas para ofrecer una experiencia de usuario interactiva y atractiva.",
    image_path: "/images/weather.jpeg",
    github_url: "https://github.com/JuanGutierrez95/WeatherApp",
    deployed_url:
      "https://drive.google.com/file/d/1HvjTcRiidV3ne4C3mqs3tvpkdgvwePJi/view?usp=drive_link",
    category: ["React", "Javascript", "Next.Js", "Typescript", "Tailwind CSS"],
    key_techs: ["Javascript", "React", "Next.Js", "Typescript", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "Foro App",
    description:
      "¡Bienvenido a mi foro personalizado! Aquí encontrarás un espacio dedicado a compartir mis reflexiones, conocimientos y experiencias sobre una amplia gama de temas. Cada publicación está cuidadosamente elaborada y puede incluir enlaces a imágenes relevantes. ¡Explora y únete a la conversación!",
    image_path: "/images/foro.jpeg",
    github_url:
      "https://github.com/JuanGutierrez95/Comision-21646-A-Juan-Gutierrez",
    deployed_url: "In progress",
    category: ["Javascript", "CSS"],
    key_techs: ["Javascript", "EJS", "CSS", "HTML"],
  },
];
