import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div`
  width: 1133px;
  height: 638px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Player = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <Container>
      <ReactPlayer
        width="1133px"
        height="638px"
        onReady={() => setPlaying(true)}
        playing={playing}
        url={url}
      />
    </Container>
  );
};

export default Player;
