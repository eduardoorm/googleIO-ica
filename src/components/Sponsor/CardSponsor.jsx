import React from "react";
import "./CardSponsor.css";
const CardSponsor = ({ imageUrl, href }) => {
  return (
    <div className="containerImageSponsor aos-init aos-animate" data-aos="flip-right">
      <a href={href} target="_blank">
        <div
          className="imgSponsor"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="rangeSponsor"><p className="txtRangeSponsor">Sponsor Gold</p></div>
      </a>
    </div>
  );
};

export default CardSponsor;
