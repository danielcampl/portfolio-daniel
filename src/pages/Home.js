import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import Button from "../components/Button";
import MyAvatar from "../assets/avatar/MyAvatar.png";
import "../CSS/Home.css";

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="row1">
        <section className="intro">
          <div className="row2">
            <div>
              <h1 className="home-title">
                <li>Hi,</li>
                <li>I'm Daniel,</li>
                <li>web developer</li>
              </h1>
            </div>
            <p className="paragraph">
              Full Stack Developer / Studding At Trybe
            </p>
          </div>
          <Link to="/contact">
            <Button title="Contact me" />
          </Link>
        </section>
      </div>
      <div>
        <img src={MyAvatar} alt="avatar" id="avatar" />
      </div>
    </div>
  );
}
