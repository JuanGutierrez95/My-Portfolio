import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const shortText = `Diseñar, desarrollar e implementar soluciones para aplicaciones web. Abarco tanto el lado del cliente (Frontend) como el lado del servidor (Backend), gestionando también la integración con bases de datos.`;

const fullText = ` Tecnologías utilizadas: JavaScript, React, TypeScript, Next.js, Node.js, Express, Sequelize, PostgreSQL, Mongoose, MongoDB y SQL.`;

const ResumeContent = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <h5 className="my-2 text-lg font-bold">Full Stack Developer</h5>
      <p className="my-3">Mayo 2023 - Actualidad</p>
      <p className="my-3 text-base text-justify">
        {showFullText ? (
          <>
            {shortText}
            {fullText}
            <a
              href="\assets\Desarrollador-Frontend-Full-Stack-Juan-Gutierrez_CV.pdf"
              download="Desarrollador-Frontend-Full-Stack-Juan-Gutierrez_CV.pdf"
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
