import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

export const GameField = styled.View`
  width: 250px;
  height: 400px;
  background-color: green;
`;

export const Ball = styled.View`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  position: absolute;
  top: ${({ y }) => -25 + 200 - y}px;
  left: ${({ x }) => -25 + 125 + x}px;
`;
