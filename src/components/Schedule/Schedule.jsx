import "./Schedule.css";
import ItemSchedule from "./ItemScheduleSpeakerText";
import React, { useState } from "react";
import speakerPierre from "../../assets/speakers/pierreGuillen.jpg";
import ItemScheduleSpeakerText from "./ItemScheduleSpeakerText";
import ItemScheduleText from "./ItemScheduleText";
const Schedule = () => {
  const [showDay1, setShowDay1] = useState(true);
  const [showDay2, setShowDay2] = useState(false);
  const [showDay3, setShowDay3] = useState(false);

  const toggleContainer = () => {
    if (showDay1 != true) {
      setShowDay1(!showDay1);
    }
    setShowDay2(false);
    setShowDay3(false);
  };

  const toggleDay2 = () => {
    setShowDay1(false);
    setShowDay3(false);
    if (showDay2 != true) {
      setShowDay2(!showDay2);
    }
  };

  const toggleDay3 = () => {
    setShowDay1(false);
    setShowDay2(false);
    if (showDay3 != true) {
      setShowDay3(!showDay3);
    }
  };
  return (
    <section id="schedule">
      <div className="containerSchedule">
        <h1>Agenda</h1>
        <div className="containenButtonsDay">
          <button onClick={toggleContainer} className="button btnDays btnDay1">
            Sábado 05
          </button>
          <button onClick={toggleDay2} className="button btnDays btnDay2">
            Sábado 12
          </button>
          <button onClick={toggleDay3} className="button  btnDays btnDay3">
            Sábado 19
          </button>
        </div>

        {showDay1 && (
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción a Flutter"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"10:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción a Flutter"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción a Flutter"}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"12:00 PM"}
              dateSession={"AGT 06"}
              titleSession={"Cierre de la primera sesión"}
            />
          </div>
        )}

        {showDay2 && (
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"¿Qué es Dart?"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"10:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción a Flutter"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción a Flutter"}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"12:00 PM"}
              dateSession={"AGT 06"}
              titleSession={"Cierre de la segunda sesión"}
            />
          </div>
        )}

        {showDay3 && (
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Creando una aplicación en Flutter"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"10:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción a Flutter"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={speakerPierre}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Introducción a Flutter"}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"12:00 PM"}
              dateSession={"AGT 06"}
              titleSession={"Cierre de la tercera sesión"}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Schedule;
