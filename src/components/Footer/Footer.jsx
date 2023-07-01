import React from "react";
import "./Footer.css";
import Social from "./Social";
import fbLogo from '../../assets/socials/facebook.png'
import linkedin from '../../assets/socials/logotipo-de-linkedin.png'
import instagramLogo from '../../assets/socials/instagram.png'
import twitterLogo from '../../assets/socials/gorjeo.png'

const Footer = () => {
  return (
    <div className="sectionFooter">
      <h1 className="titleContact">CONTACTO</h1>
      <p>gdgica1@gmail.com</p>
      <div className="containerSocial">
        <Social imageUrl={fbLogo} href={'https://www.facebook.com/gdgica'}/>
        <Social imageUrl={linkedin} href={'https://www.facebook.com/gdgica'}/>
        <Social imageUrl={instagramLogo} href={'https://www.instagram.com/gdgica/'}/>
        <Social imageUrl={twitterLogo} href={'https://twitter.com/GDGICA'}/>
        
      </div>
      <div className="credits">
        <p>Made with ❤️ by <a target="_blank" href="https://github.com/eduardoorm">Eduardo Ormeño</a></p>
      </div>
    </div>
  );
};

export default Footer;
