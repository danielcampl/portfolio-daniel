import styled from "styled-components";

import Home from '../components/home/home/Home';
import About from '../components/home/about/About';
import Contact from '../components/home/contact/Contact';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none
  }
`

function Complete() {
  return (
    <Container>
      <Home />
      <About />
      <Contact />
    </Container>
  );
}

export default Complete;