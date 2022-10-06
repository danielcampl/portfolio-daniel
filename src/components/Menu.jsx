import React from "react";

import Nav from "../components/Nav";
import AvatarContainer from "../components/AvatarContainer";
import '../CSS/Home.css';

export default function Home() {
    return (
      <div className="menu-container">
        <AvatarContainer />
        <Nav />
        <ul className="socials">
          <li><a rel="GitHub" href="https://www.linkedin.com/in/daniel-campelo-338710230/"><ion-icon name="logo-github" className="social-icon"></ion-icon></a></li>
          <li><a rel="Linkedin" href="https://github.com/danielcampl"><ion-icon name="logo-linkedin" className="social-icon"></ion-icon></a></li>
          <li><a rel="Mail" href="mailto://danielcampelo159@gmail.com"><ion-icon name="mail" className="social-icon"></ion-icon></a></li>
        </ul>
      </div>
    );
}