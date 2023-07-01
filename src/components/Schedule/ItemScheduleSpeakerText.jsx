import React from "react";

const ItemScheduleSpeakerText = ({ hours, nameSpeaker, dateSession, titleSession , imageUrl ,backgroundSolid }) => {
  return (
    <div className="containerItemSchedule">
      <div className="containerDateHourItemSchedule">
        <p className="hourItemSchedule">
          {hours} <br></br>
          <span className="dateItemSchedule">{dateSession}</span>
        </p>
      </div>
      <div style={{borderLeftColor:backgroundSolid}} className="sessionInformationItemSchedule">
        <div style={{backgroundImage:`url(${imageUrl})`}} className="imgSpeakerItemSchedule"></div>
        <p className="titleSessionItemSchedule">
          {titleSession} <br />
          <span className="nameSpeakerItemSchedule">{nameSpeaker}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemScheduleSpeakerText;
