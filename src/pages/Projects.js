import React from "react";
import { motion } from "framer-motion";

import Menu from "../components/Menu";
import Image from "../assets/avatar/image.png";
import "../CSS/Projects.css";

export default function Projects() {
  return (
    <div>
      <Menu />
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
        className="magicwall wall"
      >
        <ul>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Image} alt="img" />
              <div className="hover-content" />
              <a href="#" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
