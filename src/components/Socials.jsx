import React from "react";

import '../globals/App.css';
import './navbars/NavBar.css';

export default function NavPages() {
  return (
    <section>
      <div>
        <ul className="social-links-container">
          <a href="https://www.linkedin.com/in/danielcampl/" target="_blank" rel="noreferrer">
            <div className="icon-container">
              <ion-icon name="logo-linkedin" />
            </div>
          </a>
          <a href="https://github.com/danielcampl" target="_blank" rel="noreferrer">
            <div className="icon-container">
              <ion-icon name="logo-github" />
            </div>
          </a>
          <a href="https://www.instagram.com/danielcampl/" target="_blank" rel="noreferrer">
            <div className="icon-container">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </a>
        </ul>
      </div>
    </section>
  );
}