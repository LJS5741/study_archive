import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0px auto;
`;

const Button = styled.button`
  display: flex;
  height: 50px;
  margin: 5px;
  flex: 1;
  color: white;
  margin-bottom: 10px;
  border-style: none;
  align-items: center;
  justify-content: center;

  &.green {
    background-color: green;
  }
  &.orange {
    background-color: orange;
  }
  &.purple {
    background-color: purple;
  }
`;

const ColorBox = styled.div`
  border: 1px solid black;
  height: 500px;
  background-color: ${(props) => props.bgColor || "transparent"};
`;

const StyleEx = () => {
  const [color, setColor] = useState();
  return (
    <>
      <Container>
        <Button className="green" onClick={() => setColor("green")}>
          Green
        </Button>
        <Button className="orange" onClick={() => setColor("orange")}>
          Orange
        </Button>
        <Button className="purple" onClick={() => setColor("purple")}>
          Purple
        </Button>
      </Container>
      <ColorBox bgColor={color}></ColorBox>
    </>
  );
};
export default StyleEx;
