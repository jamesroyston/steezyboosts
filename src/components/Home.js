import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #E5E5E5;
`;

const Cta = styled.button`
  width: 150px;
  height: 56px;
  background-color: #0B79FB;
  border: none;
  border-radius: 2px;
  font-family: 'Poppins', sans-serif;
  color: white;

  font-size: 20px;
`;

const Home = () => {
    return <Container>
      <Cta>
        GET A BOOST
      </Cta>
    </Container>
}

export default Home;
