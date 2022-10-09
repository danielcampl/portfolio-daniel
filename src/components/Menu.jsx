import React from "react";

import "../CSS/Menu.css";

export default function Home() {
  return (
    <div className="menu-container">
      <a rel="home" href="/">
        <div className="home-icon">
          <h1 className="D">D</h1>
          <div className="avatar-text">
            <h2>Daniel</h2>
            <h5>Web Developer</h5>
          </div>
        </div>
      </a>
      <nav className="nav-container">
        <a rel="About" href="/about" className="info-routes extra-border">
          About
        </a>
        <a rel="My Skills" href="/skills" className="info-routes">
          My Skills
        </a>
        <a rel="Projects" href="/projects" className="info-routes">
          Projects
        </a>
        <a rel="Contact" href="/contact" className="info-routes">
          Contact
        </a>
      </nav>
      <ul className="socials">
        <li>
          <a
            rel="GitHub"
            href="https://www.linkedin.com/in/daniel-campelo-338710230/"
          >
            <ion-icon name="logo-github" className="social-icon"></ion-icon>
          </a>
        </li>
        <li>
          <a rel="Linkedin" href="https://github.com/danielcampl">
            <ion-icon name="logo-linkedin" className="social-icon"></ion-icon>
          </a>
        </li>
        <li>
          <a rel="Mail" href="mailto://danielcampelo159@gmail.com">
            <ion-icon name="mail" className="social-icon"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
}
