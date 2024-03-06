import React from "react";

import styled from "styled-components";
import { TypeAnimation } from 'react-type-animation';

const Section = styled.section``;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Img = styled.img`
  width: 250px;
  height: 300px;
  display: block;
  max-width: 100%;
`;

export default function Loading() {
    return (
        <Section>
            <Container>
                <Img src="./img/page/moon.png" />
                <TypeAnimation sequence={[
                    'Carregando...',
                    500,
                    'Daniel está pensando...',
                    500,
                ]} speed={50}
                    className="typeAnimation"
                    wrapper="span"
                    repeat={Infinity}
                />
            </Container>
        </Section>
    );
}