import "./Schedule.css";
import ItemSchedule from "./ItemScheduleSpeakerText";
import React, { useState } from "react";
import imgPierre from "../../assets/speakers/pierreGuillen.jpg";
import imgDiego from "../../assets/speakers/diegoDeGranda.jpg";
import imgSebastian from "../../assets/speakers/sebastiaGomez.jpg";
import imgJose from "../../assets/speakers/joseCarlos.jpg";
import imgRafael from "../../assets/speakers/rafaelGonzales.jpg";
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
              imageUrl={imgPierre}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción al desarrollo móvil con Flutter."}
              nameSpeaker={"Pierre Guillen"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#4285F4"}
              imageUrl={imgJose}
              hours={"10:15 AM"}
              dateSession={"AGT 06"}
              titleSession={"Primeros pasos en Notion."}
              nameSpeaker={"JoseCarlos"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgRafael}
              hours={"11:00 AM"}
              dateSession={"AGT 06"}
              titleSession={"Inspirándonos en culturas prehispánicas para crear videojuegos de éxito."}
              nameSpeaker={"Rafael Gonzales Otoya"}
            />
              <ItemScheduleSpeakerText
              backgroundSolid={"#0F9D56"}
              imageUrl={imgSebastian}
              hours={"11:45 AM"}
              dateSession={"AGT 06"}
              titleSession={"Aprende a desarrollar para la web utilizando todas las herramientas que google tiene para ti."}
              nameSpeaker={"Sebastián Gomez"}
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
