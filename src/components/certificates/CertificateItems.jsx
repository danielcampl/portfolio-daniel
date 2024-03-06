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
  font-size: 20px;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;

  &:hover {
    color: #da4ea2;
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
  width: 530px;
  height: 390px;
  border-radius: 5px;
  display: block;
  max-width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 60px #fff;
  }

  @media (max-width: 468px) {
    width: 340px;
    height: 240px;
  }

  @media (min-width: 469px) and (max-width: 768px) {
    width: 440px;
    height: 340px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 640px;
    height: 440px;
  }
`;

export default function CertificateItems({ certificateImage, linkToCertificate }) {
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
            src={certificateImage}
            onClick={() => openInNewTab(linkToCertificate)}
          />
          <Span>Clique para se redirecionar ao certificado</Span>
        </Div>
      </motion.div>
    </Section>
  );
}
