import React, { useState } from "react";

import Socials from '../Socials';
import './NavBar.css';
import { FaBars } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuOpenIcon, setMenuOpenIcon] = useState(false);

  const handleNavButton = () => {
    setMenuVisible(!menuVisible);
    setMenuOpenIcon(!menuOpenIcon);
  }

  return (
    <section className="home-navbar">
      <div className="home-nav-container">
        <a href="/" className="socials">
          <img src="./img/page/logo.png" />
        </a>
        <ul className="home-nav-socials">
          <li><a href="#about" className="socials">Sobre</a></li>
          <li><a href="/certificates" className="socials">Certificados</a></li>
          <li><a href="/projects" className="socials">Projetos</a></li>
          <li><a href="#contact" className="socials">Contato</a></li>
          <li><a rel="Resume" href="/resume" className="socials">Resume</a></li>
        </ul>
        <div className="socials-comp">
          <Socials />
        </div>
        <div
          className="i-bars"
          onClick={() => handleNavButton()}
        >
          {
            menuOpenIcon
              ?
              <TiDeleteOutline id="x-icon" />
              :
              <FaBars
                id="i"
              />
          }
        </div>
        <div className={`dropdown-menu ${menuVisible ? 'open' : ''}`}>
          <li><a href="#about" className="socials">Sobre</a></li>
          <li><a href="/certificates" className="socials">Certificados</a></li>
          <li><a href="/projects" className="socials">Projetos</a></li>
          <li><a href="#contact" className="socials">Contato</a></li>
          <li><a rel="Resume" href="/resume" className="socials">Resume</a></li>
          <Socials />
        </div>
      </div>
    </section>
  );
}