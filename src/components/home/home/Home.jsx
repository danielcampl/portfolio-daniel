import React from "react";
import { TypeAnimation } from 'react-type-animation';

import Navbar from "../../navbars/Navbar";
import './Home.css';

export default function Home() {
  return (
    <section id="home">
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <div className="left">
            <h1>Olá,</h1>
            <h1>Eu sou o Daniel</h1>
            <div className="mid">
              <img className="line-img" src="./img/page/line.png" />
              <span>web developer | front end</span>
            </div>
            <div>
              <TypeAnimation sequence={[
                '/ FRONTEND DEVELOPER',
                2000,
                '/ TRYBE STUDENT 2022',
                2000,
                '/ DIGITAL CREATOR',
                2000,
              ]} speed={50}
                className="typeAnimation"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div className="button-home-container">
              <button><a href="#about">Ver mais</a></button>
              <button><a rel="Resume" href="/resume">Resume</a></button>
            </div>
          </div>
          <img src="./img/page/astronauta2.png" className="image" />
        </div>
      </div>
    </section >
  );
}