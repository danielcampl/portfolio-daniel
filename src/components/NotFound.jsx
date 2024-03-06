import React from "react";

import { TypeAnimation } from 'react-type-animation';
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Button = styled.button`
  background-color: #da4ea26c;
  color: white;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  padding: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #da4ea2;
    box-shadow: 5px 5px 40px #da4ea2;
  }
`;

export default function NotFound() {
  return (
    <Section>
      <Container>
        <TypeAnimation sequence={[
          "/ Não foi possível encontrar esta página",
          2000,
          "/ Volte para a página inicial",
          2000,
        ]} speed={50}
          className="typeAnimation"
          wrapper="span"
          repeat={Infinity}
        />
        <Button><a href="/">Página Inicial</a></Button>
      </Container>
    </Section>
  );
}