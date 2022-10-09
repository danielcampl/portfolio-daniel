import React from "react";

import Menu from "../components/Menu";
import "../CSS/Skills.css";

export default function Skills() {
  return (
    <div>
      <Menu />
      <section className="section-skills">
        <div>
          <h1 className="skills-title">Skills</h1>
        </div>
        <div className="skills-text">
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
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
    </div>
  );
}
