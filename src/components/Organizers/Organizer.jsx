import React from "react";
import "./Organizer.css";
import CardOrganizer from "./CardOrganizer";
import gdgIcaLogo from "../../assets/organizers/gdgIcaLogo.png";
import flutterIcaLogo from "../../assets/organizers/flutterIcaLigth.png";
const Organizer = () => {
  return (
    <section id="organizer">
      <div className="sectionOrganizer">
        <h1 className="titleOrganizer">Organizadores</h1>
        <div className="containerOrganizers">
          <CardOrganizer
            imageUrl={gdgIcaLogo}
            href={"https://gdg.community.dev/gdg-ica/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Organizer;
