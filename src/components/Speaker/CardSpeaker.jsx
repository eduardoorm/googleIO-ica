import React from "react";
import "./CardSpeaker.css";
const CardSpeaker = ({imageUrl,name,country,role}) => {
  return (
    <div className="containerCardSpeaker">
      <div className="imgSpeaker" style={{backgroundImage: `url(${imageUrl})`}}> </div>
      <div className="detailsSpeaker">
        <p className="nameSpeaker">{name}</p>
        <p className="countrySpeaker">{country}</p>
        <p className="rolSpeaker">{role}</p>
      </div>
    </div>
  );
};

export default CardSpeaker;
