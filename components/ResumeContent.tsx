import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const shortText = `Como desarrollador, estoy trabajando en proyectos utilizando tecnologías como TypeScript, React, Tailwind CSS, Next.js, Node.js y Express. Mi enfoque se centra en el desarrollo de interfaces de usuario interactivas y receptivas con React y TypeScript, utilizando las mejores prácticas para escribir un código limpio y eficiente. Además, estoy utilizando Tailwind CSS para la maquetación de estilos, lo que me permite diseñar interfaces atractivas de manera rápida y sencilla.`;

const fullText = ` También estoy aprovechando las ventajas de Next.js para optimizar el rendimiento de las aplicaciones mediante técnicas como el renderizado del lado del servidor y la generación de sitios estáticos. En el lado del servidor, estoy trabajando con Node.js y Express para desarrollar servicios web robustos y escalables, asegurando una comunicación eficiente entre el cliente y el servidor.`;

const ResumeContent = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <h5 className="my-2 text-lg font-bold">Front End | Full Stack Developer</h5>
      <p className="my-3">Abril 2023 - Actualmente</p>
      <p className="my-3 text-base text-justify">
        {showFullText ? (
          <>
            {shortText}
            {fullText}
            <a
              href="\assets\FrontEnd-FullStackDeveloper_Juan_Gutierrez.pdf"
              download="FrontEnd-FullStackDeveloper_Juan_Gutierrez.pdf"
              aria-label="Resume"
            >
              <button className="text-blue">
                <p>Descargue mi currículum para ver más.</p>
              </button>
            </a>
            <button
              className="font-bold ml-2 cursor-pointer text-blue focus:outline-none"
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
