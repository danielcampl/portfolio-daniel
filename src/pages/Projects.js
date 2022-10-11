import React from "react";
import { motion } from 'framer-motion';

import Menu from '../components/Menu';

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
                {/* <img src={} alt="project-image" /> */}
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    );
}