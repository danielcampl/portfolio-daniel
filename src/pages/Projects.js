import React from "react";
import { motion } from "framer-motion";

import Menu from "../components/Menu";
import Empty from "../assets/images/Empty.png";
import Trybefy from "../assets/images/trybefy.png";
import Wallet from "../assets/images/trybe-wallet.png";
import Shopping from "../assets/images/Shopping-cart.png";
import Trivia from "../assets/images/trivia.png";
import Recipes from "../assets/images/recipes.png";
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
              <img src={Trybefy} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>View this project</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Wallet} alt="img" />
              <div className="hover-content" />
              <a href="https://github.com/danielcampl/trybe-wallet-project"
              target="_blank"
              className="colorbox"><p>View this project</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Trivia} alt="img" />
              <div className="hover-content" />
              <a href="https://github.com/danielcampl/trivia-game-project" target="_blank" className="colorbox"><p>View this project</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Shopping} alt="img" />
              <div className="hover-content" />
              <a href="https://github.com/danielcampl/shopping-cart-project" target="_blank" className="colorbox"><p>View this project</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Recipes} alt="img" />
              <div className="hover-content" />
              <a href="https://github.com/danielcampl/recipes-app-project" target="_blank" className="colorbox"><p>View this project</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Empty} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Empty} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Empty} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Empty} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Empty} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Empty} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
          <li>
            <div className="magicwall-item lazyload">
              <img src={Empty} alt="img" />
              <div className="hover-content" />
              <a href="#" target="_blank" className="colorbox"><p>Empty</p></a>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
