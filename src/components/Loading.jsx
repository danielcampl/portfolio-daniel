import React from "react";

import Menu from "../components/Menu";
import MyAvatar from "../assets/avatar/MyAvatar.png";
import "../CSS/Loading.css";

export default function Loading() {
  return (
    <div>
      <Menu />
      <div className="loading-icon">
        <img src={MyAvatar} alt="avatar" id="loading-avatar" />
        <p className="name">Daniel</p>
        <div className="loading-bar">
          <div className="line-bar" />
        </div>
        <p className="phrase">Daniel is thinking...</p>
      </div>
    </div>
  );
}
