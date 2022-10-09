import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import Button from "../components/Button";
import MyAvatar from "../assets/avatar/MyAvatar.png";
import "../CSS/Home.css";
import '../CSS/Title.css'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="row1">
        <section className="intro">
          <div className="row2">
            <div>
              <div className="container">
                <span>H</span>
                <span>i</span>
                <span>,</span>
              </div>
              <div className="container">
                <span>I</span>
                <span>'</span>
                <span>m </span>
                <span>D</span>
                <span>a</span>
                <span>n</span>
                <span>i</span>
                <span>e</span>
                <span>l</span>
              </div>
              <div className="container">
                <span>w</span>
                <span>e</span>
                <span>b </span>
                <span>d</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
              </div>
            </div>
            <p className="paragraph">
              Full Stack Developer / Studding At Trybe
            </p>
          </div>
          <Link to="/contact">
            <Button title="Contact me" />
          </Link>
        </section>
        <div>
          <img src={MyAvatar} alt="avatar" id="avatar" />
        </div>
      </div>
    </div>
  );
}
