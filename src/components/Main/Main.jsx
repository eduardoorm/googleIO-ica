import React from "react";
import "./Main.css";
import ScrollToTopButton from "../Elements/ScrollToTopButton/ScrollToTopButton";

const Main = () => {
  return (
    <div className="containerMain">
      <p className="tituloContainerMain">
        Google IO Extended<p className="anioContainerMain">Ica</p>
      </p>
      <a target="_blank" href="https://gdg.community.dev/events/details/google-gdg-ica-presents-flutter-school-2023/">
        <button className="button btnInscribirse">¡Inscribirse!</button>
      </a>
     
    </div>
  );
};

export default Main;
