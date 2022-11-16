import React from "react";
import styled from "styled-components";

type PinProps = {
  urls: any;
};

const Pin: React.FC<PinProps> = ({ urls }) => {
  return (
    <Wrapper>
      <Container>
        <img src={urls.urls.regular} alt="" />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export default Pin;
