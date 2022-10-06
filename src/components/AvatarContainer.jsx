import React from "react";

import MyAvatar from '../assets/avatar/MyAvatar.png';
import '../CSS/AvatarContainer.css';

export default function AvatarContainer() {
    return (
      <a rel="home" href="/">
        <div className="home-icon">
          <img src={MyAvatar} alt="MyAvatar" className="avatar-icon" />
          <div className="avatar-text">
            <h2>Daniel</h2>
            <h5>Web Developer</h5>
          </div>
        </div>
      </a>
    );
}