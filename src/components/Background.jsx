import React from "react";

import videoBG from '../assets/video/videoBG.mp4';
import '../CSS/Background.css';

export default function Background() {
  return (
    <div>
      <video src={videoBG} autoPlay loop muted />
    </div>
  );
}