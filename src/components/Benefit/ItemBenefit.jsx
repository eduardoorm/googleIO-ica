import React from "react";

const ItemBenefit = ({ titleBenefit, description }) => {
  return (
    <div
      className="containerBenefitItem aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="containerTitleBenefit">
        <div className="imgTitleBenefit"></div>
        <div className="txtTileBenefit">{titleBenefit}</div>
      </div>
      <p className="txtDescriptionBenefit">{description}</p>
    </div>
  );
};

export default ItemBenefit;
