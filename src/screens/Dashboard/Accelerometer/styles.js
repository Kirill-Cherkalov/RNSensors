import { Animated } from "react-native";
import styled from "styled-components/native";

import Flex from "components/Container";

export const Label = styled.Text`
  color: ${({ theme }) => theme.white};
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.white};
`;

export const CoordinateItem = styled(Flex.Column)``;

export const CoordinateContainer = styled(Flex.Row)`
  justify-content: space-between;
`;

export const Container = styled(Flex.Column)`
  background-color: ${({ theme }) => theme.dark};
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  width: ${({ size = 150 }) => size}px;
  height: ${({ size = 150 }) => size}px;
  border-width: ${({ borderWidth = 1 }) => borderWidth}px;
  border-color: ${({ theme }) => theme.white};
  margin: auto;
  border-radius: 100px;
`;

export const GameField = styled(Circle).attrs({
  size: 250,
  borderWidth: 5,
})`
  border-radius: 125px;
  /* border-color: ${({ isValid }) => (isValid ? "green" : "red")}; */
`;

export const Game = styled.View`
  flex: 1;
`;

export const SuccessField = styled(Circle).attrs({
  size: 46,
  borderWidth: 2,
})`
  border-radius: 26px;
  opacity: 1;
`;

export const Ball = styled(Animated.View)`
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 25px;
  position: absolute;
`;
