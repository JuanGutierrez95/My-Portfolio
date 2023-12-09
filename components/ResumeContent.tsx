import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const shortText = `Diseñé distintos proyectos, enfocándome en la calidad del Desarrollo Front-End. Entre los proyectos trabajados realicé mi portafolio, Foro personalizado, App Weather, y actualmente estoy trabajando en desarrollar una plataforma web dedicada exclusivamente a las vivencias y relatos de viajes, donde los usuarios tengan la posibilidad de registrarse, iniciar sesión, crear publicaciones sobre viajes y participar activamente al agregar comentarios a las publicaciones de otros viajeros.`;

const fullText = ` Tecnologías utilizadas: JavaScript, React, TypeScript, Next.js, Node.js, Express, Sequelize, PostgreSQL, Mongoose, MongoDB y SQL.`;

const ResumeContent = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <h5 className="my-2 text-lg font-bold">Full Stack Developer</h5>
      <p className="my-3">Mayo 2023 - Actualmente</p>
      <p className="my-3 text-base text-justify">
        {showFullText ? (
          <>
            {shortText}
            {fullText}
            <a
              href="\assets\Desarrollador-Front-End-Full-Stack-Juan_Gutierrez-CV.pdf"
              download="Desarrollador-Front-End-Full-Stack-Juan_Gutierrez-CV.pdf"
              aria-label="Resume"
            >
              <button className="text-blue">
                <p>Descargue mi currículum para ver más.</p>
              </button>
            </a>
            <button
              className="ml-2 font-bold cursor-pointer text-blue focus:outline-none"
              onClick={toggleText}
            >
              <IoMdArrowRoundBack />
            </button>
          </>
        ) : (
          <>
            {shortText}
            <br />
            <button
              className="ml-0 font-bold cursor-pointer text-blue focus:outline-none"
              onClick={toggleText}
            >
              Leer más...
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default ResumeContent;
