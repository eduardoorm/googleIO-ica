import React from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from "../Elements/ScrollToTopButton/ScrollToTopButton";

const About = () => {
  AOS.init({
    duration: 1100
  });
  return (
    <section id="about">
      <div className="containerAbout">
        <div className="textContainerAbout">
          <h1>ACERCA DE</h1>
          El GDG Ica y Flutter Ica se complacen en presentar el Flutter School,
          un evento de capacitación de alto nivel diseñado para aquellos
          interesados en sumergirse en el emocionante mundo de la programación
          de aplicaciones móviles. Este evento de vanguardia ofrece una
          oportunidad única para adquirir habilidades y conocimientos
          especializados en el desarrollo de aplicaciones para Android e iOS
          utilizando Flutter, el marco de desarrollo de aplicaciones móviles de
          vanguardia creado por Google.
          <p>
            El Flutter School se distingue por su enfoque riguroso y práctico. A
            través de una serie de sesiones intensivas, los participantes
            explorarán en profundidad los fundamentos de Flutter, desde su
            arquitectura hasta su sintaxis y sus componentes clave. Estas
            sesiones teóricas estarán respaldadas por talleres prácticos, donde
            los asistentes podrán aplicar de inmediato los conceptos aprendidos
            y trabajar en proyectos reales. Este enfoque práctico permitirá a
            los participantes fortalecer sus habilidades en el desarrollo de
            aplicaciones y enfrentar desafíos del mundo real.
          </p>
          <b>¡COMPLETAMENTE GRATUITO!.</b>


        </div>
        <ScrollToTopButton></ScrollToTopButton>
        <div className="imgFlutter"></div>
      </div>
    </section>
  );
};

export default About;
