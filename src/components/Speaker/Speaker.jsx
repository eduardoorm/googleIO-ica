import React from "react";
import "./Speaker.css";
import CardSpeaker from "./CardSpeaker";
import imgPierre from "../../assets/speakers/pierreGuillen.jpg";


const Speaker = () => {
  return (
    <section id="speaker">
      <div className="sectionSpeaker">
        <h1 className="titleSectionSpeaker">CONOCE A LOS EXPOSITORES</h1>
        <div className="containerSpeaker">
          <CardSpeaker
            imageUrl={imgPierre}
            name={"Pierre Guillen"}
            country={"PE"}
            role={"Flutter Perú"}
          ></CardSpeaker>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
