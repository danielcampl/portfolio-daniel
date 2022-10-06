import React from "react";

export default function Nav() {
    return (
      <nav className="nav-container">
        <a rel="About" href="/about" className="info-routes">About</a>
        <a rel="My Skills" href="/skills" className="info-routes">My Skills</a>
        <a rel="Projects" href="/projects" className="info-routes">Projects</a>
        <a rel="Contact" href="/contact" className="info-routes">Contact</a>
      </nav>
    );
}
