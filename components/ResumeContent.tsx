import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const shortText = `Como desarrollador Front End para BlustFunnels, desarrollé y mantuve el sitio web de la empresa y aplicaciones utilizando mi experiencia en React, Typescript y pruebas unitarias con Jest. Pude trabajar eficientemente con el equipo de desarrollo para lograr los plazos del proyecto y proporcionar productos de alta calidad debido a mi conocimiento con metodología ágil y scrum.`;

const fullText = ` Para asegurarme de que todo el código se mantuvo y administró correctamente, también utilice Git y GitHub como sistemas de control de versiones. Fui miembro útil de equipo y contribuí al éxito del negocio gracias a mis conocimientos en desarrollo web y mi capacidad para escribir código limpio y efectivo.`;

const ResumeContent = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <h5 className="my-2 text-lg font-bold">Front End Developer</h5>
      <p className="my-3">Junio 2022 - Diciembre 2022</p>
      <p className="my-3 text-base text-justify">
        {showFullText ? (
          <>
            {shortText}
            {fullText}
            <a
          href="\assets\Front-End-FullStack-Developer_Juan_Gutierrez.pdf"
          download="Front-End-FullStack-Developer_Juan_Gutierrez.pdf"
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
