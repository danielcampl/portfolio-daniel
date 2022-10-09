import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import MyAvatar from "../assets/avatar/MyAvatar2.png";
import "../CSS/About.css";
// import "../CSS/Title.css";

export default function About() {
  return (
    <div>
      <Menu />
      <div className="section-about">
        <section className="row300">
          <div className="container about-title">
            {/* <span>M</span>
            <span>e</span>
            <span>, </span>
            <span>M</span>
            <span>y</span>
            <span>s</span>
            <span>e</span>
            <span>l</span>
            <span>f </span>
            <span>& </span>
            <span>I</span> */}
            Me, Myself & I
          </div>
          <div className="about-text">
            <p>I have knowledge in front-end and back-end, enjoy working in teams and keep lacking to learn more, not only in web development, but also in other areas encompassed by Software Engineering. In this way, acquire more experience.</p>
            <p>Well-organised person, problem solver with high attention to detail. Fan of Games online, outdoor activities and TV series. A family person and lead by good friendships.</p>
            <p>Undergraduate course: Trybe | 3º Module (03/2022 - 03/2023)</p>
            <Link to="/contact"><p className="linkto">Let's make something special.</p></Link>
          </div>
        </section>
        <div>
          <img src={MyAvatar} alt="avatar" id="avatar2" />
        </div>
      </div>
    </div>
  );
}
