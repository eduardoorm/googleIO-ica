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
            <div className="containerTxtDirectionEvent">Auditorio UTP, Ica</div>
          </div>
          <div className="mapPlaceEvent">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.095682065963!2d-75.73837142392598!3d-14.071526882900114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3db5c16ca7d%3A0x14a969e069453071!2sUniversidad%20Tecnol%C3%B3gica%20Del%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1688074880891!5m2!1ses-419!2spe"
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
