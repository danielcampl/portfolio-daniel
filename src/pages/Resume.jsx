import React, { useState, useEffect } from "react";

import styled from "styled-components";
import '../globals/App.css';
import Loading from "../components/Loading";
import AlternativeNavbar from "../components/navbars/AlternativeNavbar";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;

  @media (max-width: 468px) {
    padding-top: 50px;
  }

  @media (min-width: 469px) and (max-width: 768px) {
    padding-top: 30px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 38px;
  font-family: 'Raleway', sans-serif;
  padding-bottom: 30px;

  @media (max-width: 468px) {
    font-size: 32px;
  }
`;

const Button = styled.button`
  background-color: #da4ea26c;
  width: 250px;
  color: white;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #da4ea2;
    box-shadow: 5px 5px 30px #da4ea2;
  }

  @media (max-width: 468px) {
    width: 190px;
    padding: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export default function Resume() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3200)
  }, []);

  return (
    <>
      {
        loading ?
          <Loading />
          :
          <div>
            <AlternativeNavbar />
            <Section>
              <Title>Resume</Title>
              <Container>
              <iframe src="https://docs.google.com/document/d/e/2PACX-1vSGgr1qFOgNfOUw4yiYWZmOhzZwx6KcmTRrm0a8Y3XnZZiVcb25u8p_fOMzbvY8qMaTCPmCvS7IoZZz/pub?embedded=true"></iframe>
                <Content>
                  <Button><a href="https://docs.google.com/document/d/1X6sdweHNDeR5dREiGO4OFHETViZA028odhmHLAaShj0/edit?usp=sharing" target="_blank">Download CV</a></Button>
                  <Button><a rel="Home" href="/">Página Inicial</a></Button>
                </Content>
              </Container>
            </Section>
          </div>
      }
    </>
  );
}