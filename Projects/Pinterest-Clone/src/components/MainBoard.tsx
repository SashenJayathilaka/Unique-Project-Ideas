import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

type MainBoardProps = {
  pins: any;
};

const MainBoard: React.FC<MainBoardProps> = ({ pins }) => {
  //console.log(pins, "🚀❤🚀")

  return (
    <Wrapper>
      <Container>
        {pins.map((pin: any, index: any) => (
          <Pin key={index} urls={pin} />
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;
const Container = styled.div`
  column-count: 5;
  column-gap: 10px;
  margin: 0 auto;
  max-width: 1260px;
  height: 100%;
  background-color: white;
`;

export default MainBoard;
