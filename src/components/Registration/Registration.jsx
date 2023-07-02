import React from "react";
import "./Registration.css";
import logo from "../../assets/logoDash.png";
export const Registration = () => {
  return (
    <section id="register">
      <div className="SectionRegistation">
        <div className="containerRegistration">
          <div className="txtContainerRegistration">
            <p>¿Qué esperas?</p>
            <p className="txtInscribete">INSCRÍBETE</p>
          </div>
          <div className="containerButtons">
            <a
              href="https://gdg.community.dev/e/mwg6gb/"
              target="_blank"
            >
              <button className="button btnRegistration">¡Regístrate!</button>
            </a>
            <br />
            <a href="#">
              <button className="button btnCodeConduct">
                Código de Conducta
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};