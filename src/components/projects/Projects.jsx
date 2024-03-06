import React, { useState, useEffect } from "react";

import ProjectItems from "./ProjectItems";
import AlternativeNavbar from "../navbars/AlternativeNavbar";
import './Projects.css';

const data = [
  "Ecommerce",
  "Calculator",
  "Finance Manager",
  "Landing Page",
  "Digital Watch",
  "To Do List",
  "Login Page",
];

export default function Projects() {
  const [project, setProject] = useState('');
  const [sourceImage, setSourceImage] = useState('');
  const [linkTo, setLinkTo] = useState('');
  const [repository, setRepository] = useState('');

  useEffect(() => {
    setSourceImage(sourceImage);
    setLinkTo(linkTo);
    setRepository(repository);
  }, [setSourceImage, setLinkTo, setRepository]);

  return (
    <div>
      <AlternativeNavbar />
      <section className="projects-container">
        <div className="projects-content">
          <div className="projects-img">
            {project === "Digital Watch" ? (
              <ProjectItems
                sourceImage={"./img/projects/temporizador.png"}
                linkTo={'https://digital-watch-ten.vercel.app'}
                repository={'https://github.com/danielcampl/digital-watch'}
              />
            ) : project === "To Do List" ? (
              <ProjectItems
                sourceImage={"./img/projects/lista-de-tarefas.png"}
                linkTo={'https://to-do-list-delta-blush.vercel.app'}
                repository={'https://github.com/danielcampl/toDoList'}
              />
            ) : project === "Finance Manager" ? (
              <ProjectItems
                sourceImage={"./img/projects/controle-financeiro.png"}
                linkTo={'https://finance-dashboard-ebon.vercel.app'}
                repository={'https://github.com/danielcampl/finance-dashboard'}
              />
            ) : project === "Login Page" ? (
              <ProjectItems
                sourceImage={"./img/projects/login-page.png"}
                linkTo={'https://dynamic-login-page-ten.vercel.app'}
                repository={'https://github.com/danielcampl/dynamicLoginPage'}
              />
            ) : project === "Landing Page" ? (
              <ProjectItems
                sourceImage={"./img/projects/landing-page.png"}
                linkTo={'https://landing-page-nine-livid-58.vercel.app'}
                repository={'https://github.com/danielcampl/landing_page'}
              />
            ) : project === "Ecommerce" ? (
              <ProjectItems
                sourceImage={"./img/projects/shopping-cart.png"}
                linkTo={'https://iphone-ecommerce.vercel.app'}
                repository={'https://github.com/danielcampl/iphone-ecommerce'}
              />
            ) : project === "Calculator" ? (
              <ProjectItems
                sourceImage={"./img/projects/calculadora.png"}
                linkTo={'https://calculator-seven-mauve.vercel.app'}
                repository={'https://github.com/danielcampl/calculator'}
              />
            ) : (
              <div />
            )}
          </div>
          <div className="projects-names">
            <ul>
              {data.map((item) => (
                <li
                  key={item}
                  text={item}
                  onClick={() => setProject(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mobile-projects-container">
        <div className="projects-img">
              <ProjectItems
                sourceImage={"./img/projects/temporizador.png"}
                linkTo={'https://digital-watch-ten.vercel.app'}
                repository={'https://github.com/danielcampl/digital-watch'}
              />
              <ProjectItems
                sourceImage={"./img/projects/lista-de-tarefas.png"}
                linkTo={'https://to-do-list-delta-blush.vercel.app'}
                repository={'https://github.com/danielcampl/toDoList'}
              />
              <ProjectItems
                sourceImage={"./img/projects/controle-financeiro.png"}
                linkTo={'https://finance-dashboard-ebon.vercel.app'}
                repository={'https://github.com/danielcampl/finance-dashboard'}
              />
              <ProjectItems
                sourceImage={"./img/projects/login-page.png"}
                linkTo={'https://dynamic-login-page-ten.vercel.app'}
                repository={'https://github.com/danielcampl/dynamicLoginPage'}
              />
              <ProjectItems
                sourceImage={"./img/projects/landing-page.png"}
                linkTo={'https://landing-page-nine-livid-58.vercel.app'}
                repository={'https://github.com/danielcampl/landing_page'}
              />
              <ProjectItems
                sourceImage={"./img/projects/shopping-cart.png"}
                linkTo={'https://iphone-ecommerce.vercel.app'}
                repository={'https://github.com/danielcampl/iphone-ecommerce'}
              />
              <ProjectItems
                sourceImage={"./img/projects/calculadora.png"}
                linkTo={'https://calculator-seven-mauve.vercel.app'}
                repository={'https://github.com/danielcampl/calculator'}
              />
              <div />
          </div>
        </div>
      </section>
    </div>
  );
}