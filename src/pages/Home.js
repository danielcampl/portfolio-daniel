import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import Button from "../components/Button";
import { motion } from "framer-motion";

import Balls from "../assets/images/balls.gif";
import "../CSS/Title.css";

export default function Home() {
  return (
    <div>
      <Menu />
      <motion.div
        className="row1"
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <section className="sec-home">
          <div className="intro">
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
          </div>
          <Link to="/contact">
            <Button title="Contact me" />
          </Link>
          <div className="balls">
            <img src={Balls} alt="balls" className="ball" />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
