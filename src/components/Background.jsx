import React from "react";

import video from '../assets/video/video.gif';
import '../CSS/Background.css';

export default function Background() {
  return (
    <div>
      <img src={video} autoPlay loop muted alt="gif" />
    </div>
  );
}