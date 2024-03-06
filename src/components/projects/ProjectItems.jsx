import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;

  &:hover{
    color: pink;
  }

  @media (max-width: 468px) {
    font-size: 16px;
  }

  @media (min-width: 469px) and (max-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;

const Img = styled.img`
  width: 800px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  max-width: 100%;

  &:hover {
    box-shadow: 5px 5px 60px #fff;
  }

  @media (max-width: 468px) {
    width: 340px;
  }

  @media (min-width: 469px) and (max-width: 768px) {
    width: 440px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 640px;
  }
`;

export default function ProjectItems({sourceImage, linkTo, repository}) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Section>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <Div>
          <Img
            src={sourceImage}
            onClick={() => openInNewTab(linkTo)}
          />
          <Span onClick={() => openInNewTab(repository)}>Repositório do projeto</Span>
        </Div>
      </motion.div>
    </Section>
  );
}
