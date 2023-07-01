import React from "react";

const ItemScheduleText = ({ hours, dateSession, titleSession, backgroundSolid,backgroundLight}) => {
  return (
    <div className="containerItemSchedule">
      <div style={{backgroundColor:backgroundSolid}} className="containerDateHourItemSchedule">
        <p className="hourItemSchedule">
          {hours} <br></br>
          <span className="dateItemSchedule">{dateSession}</span>
        </p>
      </div>
      <div style={{backgroundColor:backgroundLight ,borderLeftColor:backgroundSolid}} className="sessionInformationItemSchedule">
        <p className="titleSessionItemSchedule">
          {titleSession} <br />
        </p>
      </div>
    </div>
  );
};

export default ItemScheduleText;
