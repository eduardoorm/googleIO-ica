import "./Schedule.css";
import ItemSchedule from "./ItemScheduleSpeakerText";
import React, { useState } from "react";
import speakerPierre from "../../assets/speakers/pierreGuillen.jpg";
import imgDiego from "../../assets/speakers/diegoDeGranda.jpg";
import imgSebastian from "../../assets/speakers/sebastiaGomez.jpg";
import imgJose from "../../assets/speakers/joseCarlos.jpg";

import ItemScheduleSpeakerText from "./ItemScheduleSpeakerText";
import ItemScheduleText from "./ItemScheduleText";
const Schedule = () => {
  return (
    <section id="schedule">
      <div className="containerSchedule">
        <h1>Agenda</h1>
        <div className="containenButtonsDay">
        </div>
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgSebastian}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"¿Cómo iniciar en la programación?"}
              nameSpeaker={"Sebastian Gomez"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#4285F4"}
              imageUrl={imgJose}
              hours={"10:15 AM"}
              dateSession={"AGT 06"}
              titleSession={"Primeros pasos en Notion"}
              nameSpeaker={"JoseCarlos"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgDiego}
              hours={"11:00 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción al Desarrollo Web"}
              nameSpeaker={"Diego De Granda"}
            />
              <ItemScheduleSpeakerText
              backgroundSolid={"#0F9D56"}
              hours={"11:45 AM"}
              dateSession={"AGT 06"}
              titleSession={"Inteligencia Artificial"}
              nameSpeaker={"Por definir"}
            />
            <ItemScheduleText
              backgroundSolid={"#F4B400"}
              backgroundLight={"#FAEDC9"}
              hours={"12:30 PM"}
              dateSession={"AGT 06"}
              titleSession={"Cierre del Google IO Ica 2023"}
            />
          </div>
      </div>
    </section>
  );
};

export default Schedule;
