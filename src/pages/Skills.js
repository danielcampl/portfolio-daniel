import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Menu from "../components/Menu";

export default function Skills() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <Menu />
      <motion.div 
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <section className="section-skills">
          <div>
            <h1 className="skills-title">Skills</h1>
          </div>
          <div className="skills-text">
            <p>
              Since beginning my journey as a web developer nearly 7 months ago,
              I’ve done some projects for Trybe such as "Recipes app" and
              "Online Store", and collaborated with talented people to create
              and study this type of work.
            </p>
            <p>
              I create websites that are fast, easy to use, and built with best
              practices. The main area of my expertise is front-end development,
              HTML, CSS, JS, building small and medium web apps.
            </p>
            <p>
              I'm also studding for full-stack developement as I begun with
              Back-end about 1 month ago.
            </p>
            <p>
              Visit my{" "}
              <a
                href="/skills"
                rel="noopener noreferrer"
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/daniel-campelo-338710230/"
                  )
                }
                className="linkto"
              >
                LinkedIn
              </a>{" "}
              profile for more details or just{" "}
              <Link to="/contact" className="linkto">
                contact
              </Link>{" "}
              me.
            </p>
          </div>
        </section>
        <section>
          <table className="skills">
            <tbody>
              <tr>
                <th>Front-end</th>
                <td>
                  <div className="front-end" />
                </td>
                <th>Back-end</th>
                <td>
                  <div className="back-end" />
                </td>
                <th>ReactJS</th>
                <td>
                  <div className="react" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </motion.div>
    </div>
  );
}
