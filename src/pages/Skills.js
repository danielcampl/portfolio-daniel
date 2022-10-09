import React from "react";

import Menu from '../components/Menu';
import '../CSS/Skills.css';

export default function Skills() {
    return (
      <div>
        <Menu />
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
    );
}