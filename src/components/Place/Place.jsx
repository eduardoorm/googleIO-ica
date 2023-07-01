import React from "react";
import "./Place.css";
export const Place = () => {
  return (
    <div className="sectionPlaceEvent">
      <h1>Lugar</h1>
      <div className="containerPlaceEvent">
        <div className="containerDetailPlaceEvent">
          <div className="containerDirectionEvent">
            <div className="imgDirectionEvent"></div>
            <div className="containerTxtDirectionEvent">Colegio de Ingenieros, Ica</div>
          </div>
          <div className="mapPlaceEvent">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d967.5132901618858!2d-75.73063319107557!3d-14.07403816424185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9110e29172cf48f7%3A0x778bc00fabad62e7!2sCa.%20Nardos%20212%2C%20Ica%2011001!3m2!1d-14.073799099999999!2d-75.730233!5e0!3m2!1sen!2spe!4v1688195328794!5m2!1sen!2spe"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="imgPlaceEvent"></div>
      </div>
    </div>
  );
};
