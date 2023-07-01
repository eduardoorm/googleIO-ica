import React from "react";
import "./Footer.css";
import Social from "./Social";
import fbLogo from '../../assets/socials/fb-logo.png'
import discordLogo from '../../assets/socials/discord-logo.png'
import instagramLogo from '../../assets/socials/instagram-logo.png'
import twitterLogo from '../../assets/socials/twitter-logo.png'

const Footer = () => {
  return (
    <div className="sectionFooter">
      <h1 className="titleContact">CONTACTO</h1>
      <p>gdgica1@gmail.com</p>
      <div className="containerSocial">
        <Social imageUrl={fbLogo} href={'https://www.facebook.com/gdgica'}/>
        <Social imageUrl={discordLogo} href={'https://www.facebook.com/gdgica'}/>
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
