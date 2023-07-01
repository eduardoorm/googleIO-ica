import React from "react";
import './ItemInformationBar.css'
const ItemInformationBar = ({textInformation, backgroundColor}) => {
    const style={
        backgroundColor
    }
      return (
    <div className="itemInformationBar itemInformationBar1" style={style}>
      {textInformation}
    </div>
  );
};

export default ItemInformationBar;
