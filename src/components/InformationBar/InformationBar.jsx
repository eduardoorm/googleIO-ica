import React from "react";
import "./InformationBar.css";
import ItemInformationBar from "./ItemInformationBar";
const InformationBar = () => {
  return (
    <div className="sectionInformationBar">
      <div className="containerInformation">
        <div className="containerInformationBar">
          <ItemInformationBar
            backgroundColor="#66b2f0"
            textInformation={"Construye una app desde Cero"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(24, 24, 24, 0.939)"}
            textInformation={"#FlutterSchoolIca"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Conecta con desarolladores locales"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(24, 24, 24, 0.939)"}
            textInformation={" Obten un certificado al finalizar"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Muchas sorpresas durante el curso"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(24, 24, 24, 0.939)"}
            textInformation={"Descubre el desarrollo móvil"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Construye una app desde Cero"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(24, 24, 24, 0.939)"}
            textInformation={"#FlutterSchoolIca"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Conecta con desarolladores locales"}
          ></ItemInformationBar>
        </div>
      </div>
    </div>
  );
};

export default InformationBar;
