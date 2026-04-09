import styled, { css } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  box-sizing: border-box;
  font-weight: 600p;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  ${(props) =>
    props.inverted &&
    css`
    background: none;
    border: 2px solid white;
    order: white;
    &:hover {
    background: white
    color: black
    ;}
  `};
  & + button {
    margin-left: lrem;
  }
`;

const StyleComp = () => {
  return (
    <>
      <Container color="orangered">
        <button>안녕하세요.</button>
        <button inverted={true}>반전 안녕하세요.</button>
      </Container>
    </>
  );
};

export default StyleComp;
