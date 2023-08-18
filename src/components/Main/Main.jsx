import React from "react";
import "./Main.css";
import ScrollToTopButton from "../Elements/ScrollToTopButton/ScrollToTopButton";

const Main = () => {
  return (
    <div className="containerMain">
      {/* <p className="tituloContainerMain">
        Google IO Extended
        <p className="anioContainerMain">Ica</p>
      </p> */}
      <div className="tituloContainerMain">
        <p>Google IO Extended</p>
        <p className="anioContainerMain">Ica</p>
      </div>
      <a
        target="_blank"
        href="https://gdg.community.dev/e/mwg6gb/"
      >
        <button className="button btnInscribirse">¡Inscribirse!</button>
      </a>
    </div>
  );
};

export default Main;
