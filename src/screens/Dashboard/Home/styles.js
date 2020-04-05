import styled from "styled-components/native";
import Animated, { Easing } from "react-native-reanimated";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Ball = styled(Animated.View)`
  background-color: red;
`;
