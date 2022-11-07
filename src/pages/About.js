import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Menu from "../components/Menu";
import Balls from "../assets/images/balls.gif";

export default function About() {
  return (
    <div>
      <Menu />
      <motion.div
        className="section-about"
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <section className="row300">
          <div>
            <h1 className="about-title">Me, Myself & I</h1>
          </div>
          <div className="about-text">
            <p>
              I have knowledge in front-end and back-end, enjoy working in teams
              and keep wanting to learn more, not only in web development, but
              also in other areas encompassed by Software Engineering. In this
              way, acquire more experience.
            </p>
            <p>
              Well-organised person, problem solver with high attention to
              detail. Fan of Games online, outdoor activities and TV series. A
              family person and accompanied by good friendships.
            </p>
            <p>Undergraduate course: Trybe | 3º Module (03/2022 - 03/2023)</p>
          </div>
          <Link to="/contact">
            <p className="linkto">Let's work together.</p>
          </Link>
          <div>
            <img src={Balls} alt="balls" className="balls" />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
