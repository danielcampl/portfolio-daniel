import React from "react";

import { Link } from "react-router-dom";
import '../../../globals/App.css';
import './About.css';

export default function About() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="about-img">
          <img src="./img/page/astronauta.png" />
        </div>
        <div className="right">
          <div>
            <div>
              <h1>Me, Myself & I</h1>
            </div>
            <div>
              <p>
                Possuo conhecimento em front-end e back-end, gosto de trabalhar em
                equipe e prezo por continuar aprendendo cada vez mais com meus
                parceiros, não só no campo de desenvolvimento como também em outras
                áreas que englobam a Engenharia de Software. Dessa forma, adquirindo mais experiência.
              </p>
              <p>
                Solucionador de problemas com bastante atenção
                nos detalhes. Fã de Games, atividades ao ar livre e seriados de TV nas
                horas vagas. Amante do ambiente familiar e acompanhado por um bom grupo
                de amigos.
              </p>
              <span className="pad-5">Formado: Trybe | Web Dev | Ciência da Computação (03/2022 - 07/2023)</span>
            </div>
          </div>
          <div>
            <div>
              <h1>Some of My Skills</h1>
            </div>
            <div>
              <p>
                Desde que comecei minha jornada em desenvolvimento web a pouco mais de 1 ano
                atrás, tenho feito vários projetos tanto individual quanto em grupo juntamente
                com a <a href="https://www.betrybe.com/" className="links" target="_blank" rel="noreferrer">Trybe</a>. Alguns desses
                projetos, deixo para visualização aqui no meu portfólio na aba
                {" "}<a href="#projects" className="links">projetos</a>. Dentre estes, "Recipes App" e
                "Delivery App". Colaborando com pessoas muito talentosas e criativas para o desenvolvimento
                dos trabalhos.
              </p>
              <p>
                Tenho facilidade em criar websites que são rápidos e de fácil acesso, construídos
                a partir das melhores práticas de código. Meu foco e paixão
                está diretamente relacionado ao front-end, React, Next.js e JavaScript, mas
                também me divirto com back-end, NodeJS, APIs, Sequelize, Docker, MySQL e
                arquitetura de software.
              </p>
              <p>
                Estudando todos os procedimentos de desenvolvimento full-stack,
                fundamentos de código, front-end, back-end e ciência da computação.
                Outros bem específicos como Python e Java.
              </p>
              <p>
                Visite meu perfil{" "}
                <a
                  href="/"
                  rel="noopener noreferrer"
                  className="links"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/danielcampl/"
                    )
                  }
                >
                  LinkedIn
                </a>{" "}
                para mais detalhes ou apenas entre em{" "}
                <Link to="/contact" className="links">
                  contato
                </Link>{" "}
                comigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}