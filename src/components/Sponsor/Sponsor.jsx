import React from "react";
import "./Sponsor.css";
import CardSponsor from "./CardSponsor";

import githubSponsor from "../../assets/sponsor/github.png";
import jetBrainsSponsor from "../../assets/sponsor/jetBrainsLogo.png";
// import oreillySponsor from "../../assets/sponsor/oreillyLogo.png";
import googleDevelopers from "../../assets/sponsor/googleDevelopers.png";
import impulseOn from "../../assets/sponsor/impulseOn.png";
import systematic from "../../assets/sponsor/systematicLogo.png";
import google from "../../assets/sponsor/googleLogo.png";
import lunaStar from "../../assets/sponsor/lunaStarLogo.jpg";
import meelCakes from "../../assets/sponsor/mel.png";
import noelia from "../../assets/sponsor/noe.png";
const Sponsor = () => {
  return (
    <section id="partner">
      <div className="sectionSponsor">
        <h1 className="titleSectionSponsor">Patrocinado Por</h1>
        <div className="containerSponsors">
          <CardSponsor imageUrl={googleDevelopers}  href={'https://developers.google.com/'} />
          <CardSponsor imageUrl={githubSponsor}   href={'https://github.com/'} />
          <CardSponsor imageUrl={jetBrainsSponsor}   href={'https://www.jetbrains.com/'} />
          <CardSponsor imageUrl={impulseOn}   href={'https://impulseon.tech/'} />
          <CardSponsor imageUrl={systematic}   href={'https://systematic.edu.pe/'} />
          <CardSponsor imageUrl={google}   href={'https://google.com/'} />
          <CardSponsor imageUrl={lunaStar}   href={'https://www.facebook.com/profile.php?id=100069238292693'} />
          <CardSponsor imageUrl={meelCakes}   href={'https://www.facebook.com/meelcakes.r'} />
          <CardSponsor imageUrl={noelia}   href={'https://www.facebook.com/chocolaterianoelia'} />
          
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
