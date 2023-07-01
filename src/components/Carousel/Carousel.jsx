import React, { useEffect } from "react";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";
import "./Carousel.css";
import ItemCarousel from "./ItemCarousel";
import speakerLeonidas from "../../assets/speakers/leonidas.jpg";
import speakerMidu from "../../assets/speakers/midudev.jpg";
import speakerPierre from "../../assets/speakers/pierreGuillen.jpg";

const Carousel = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000, // tiempo de espera entre desplazamientos en milisegundos
        disableOnInteraction: false, // habilitar/deshabilitar autoplay al interactuar con el carrusel
      },
    });
  }, []);

  return (
    <div className="containerCarousel">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Agrega aquí los elementos del carrusel */}

          <ItemCarousel
            image = {speakerLeonidas}
            color={"#fffbf0"}
            txtComment={"'Es una experiencia única llena de aprendizaje'"}
            name={"Leonidas Esteban"}
            rol={"Google Developer Expert"}
          ></ItemCarousel>

          <ItemCarousel
            image = {speakerPierre}
            color={"#f2f9f4"}
            txtComment={"'Aprendamos a construir una app móvil'"}
            name={"Pierre Guillen"}
            rol={"Google Developer Expert"}
          ></ItemCarousel>

          <ItemCarousel
            image = {speakerMidu}
            color={"#fffbf9"}
            txtComment={
              "'Es una excelente oportunidad para expandir nuestros conocimientos'"
            }
            name={"Midudev"}
            rol={"Google Developer Expert"}
          ></ItemCarousel>
        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Carousel;
