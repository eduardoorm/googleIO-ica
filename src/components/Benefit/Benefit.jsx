import React from "react";
import "./Benefit.css";
import ItemBenefit from "./ItemBenefit";
const Benefit = () => {
  return (
    <div className="sectionBenefit">
      <h1 className="title">Beneficios</h1>
      <div className="containerBenefits">
        <ItemBenefit
          titleBenefit={"Público en general"}
          description={
            "El Flutter School se distingue por su enfoque riguroso y práctico. A través de una serie de sesiones intensivas, los participantes explorarán en profundidad los fundamentos de Flutter, desde su arquitectura hasta su sintaxis y sus componentes clave."
          }
        ></ItemBenefit>
        <ItemBenefit
          titleBenefit={"Práctico"}
          description={
            "Estas sesiones teóricas estarán respaldadas por talleres prácticos, donde los asistentes podrán aplicar de inmediato los conceptos aprendidos y trabajar en proyectos reales."
          }
        ></ItemBenefit>
        <ItemBenefit
          titleBenefit={"Networking"}
          description={
            "Más allá de la formación técnica, el Flutter School también ofrece un entorno de colaboración y networking. Los participantes tendrán la oportunidad de interactuar con otros profesionales y entusiastas de la tecnología, estableciendo valiosas conexiones en la industria."
          }
        ></ItemBenefit>
        <ItemBenefit
          titleBenefit={"Trabajo Colaborativo"}
          description={
            "El evento fomentará el intercambio de ideas, la resolución conjunta de desafíos técnicos y el crecimiento profesional a través de una red sólida y diversa."
          }
        ></ItemBenefit>
      </div>
    </div>
  );
};

export default Benefit;
