import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div`
  width: 1133px;
  height: 638px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Player = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <Container>
      <ReactPlayer
        onReady={() => setPlaying(true)}
        playing={playing}
        url={url}
      />
    </Container>
  );
};

export default Player;
