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
  font-size: 20px;
`;

const Home = () => {
  const [url, setUrl] = useState("");
  const [num, setNum] = useState(0);
  const setUrlHandler = () => {
    let url = getRandomVideoLink(num);
    console.log(url);
    setUrl(url);
    setNum(num + 1);
  };

  return (
    <Container>
      {url && <Player url={url} />}
      <Cta onClick={() => setUrlHandler()}>GET A BOOST</Cta>
    </Container>
  );
};

export default Home;
