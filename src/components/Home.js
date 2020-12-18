import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Player from "./Player";
import getRandomVideoLink from "../utils/getRandomVideoLink";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #e5e5e5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cta = styled.button`
  width: 150px;
  height: 56px;
  background-color: #0b79fb;
  border: none;
  border-radius: 2px;
  color: white;
`;

const Home = () => {
  const [url, setUrl] = useState("");
  const setUrlHandler = () => {
    let url = getRandomVideoLink();
    console.log(url);
    setUrl(url);
  };

  return (
    <Container>
      {url && <Player url={url} />}
      <Cta onClick={() => setUrlHandler()}>bro</Cta>
    </Container>
  );
};

export default Home;
