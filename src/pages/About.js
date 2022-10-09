import React from "react";

import Menu from "../components/Menu";
import "../CSS/About.css";
import "../CSS/Title.css";

export default function About() {
  return (
    <div>
      <Menu />
      <div className="section-about">
        <section className="row300">
          <div className="container about-title">
            <span>M</span>
            <span>e</span>
            <span>, </span>
            <span>M</span>
            <span>y</span>
            <span>s</span>
            <span>e</span>
            <span>l</span>
            <span>f </span>
            <span>& </span>
            <span>I</span>
          </div>
          <div>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
          </div>
        </section>
        <table className="skills">
          <tbody>
            <tr>
              <th>HTML:</th>
              <td>
                <div className="html" />
              </td>
              <th>CSS:</th>
              <td>
                <div className="css" />
              </td>
            </tr>
            <tr>
              <th>JavaScript:</th>
              <td>
                <div className="js" />
              </td>
              <th>JS Tests:</th>
              <td>
                <div className="js-test" />
              </td>
            </tr>
            <tr>
              <th>JQuery:</th>
              <td>
                <div className="jquery" />
              </td>
              <th>TypeScript:</th>
              <td>
                <div className="ts" />
              </td>
            </tr>
            <tr>
              <th>SQL:</th>
              <td>
                <div className="sql" />
              </td>
              <th>NODE.js:</th>
              <td>
                <div className="nodejs" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
