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
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 38px;
  font-family: 'Raleway', sans-serif;
  padding-bottom: 30px;
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
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vSx5jmjA_jwmfGrVGTXz27sBzE0TaqoQ2l4Kt_6CvdUnika37qSiOr5XhefYv9TvRMi7vsVvrbbUgda/pub?embedded=true"></iframe>
                <Content>
                  <Button><a href="https://drive.google.com/file/d/1Dc6VfHMxdp5RbW5cUDefdo6RKCsGRcta/view?usp=drive_link" target="_blank">Download CV</a></Button>
                  <Button><a rel="Home" href="/">Página Inicial</a></Button>
                </Content>
              </Container>
            </Section>
          </div>
      }
    </>
  );
}