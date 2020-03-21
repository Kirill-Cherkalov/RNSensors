import React from "react";
import { View, Text, Dimensions } from "react-native";

import * as S from "./styles";

const Accelerometer = ({ coordinates }) => {
  console.log((250 / 20) * coordinates.x);

  return (
    <S.Container>
      <S.GameField>
        <S.Ball y={(400 / 20) * coordinates.y} x={(250 / 20) * coordinates.x} />
      </S.GameField>
      {/* <Text>Accelerometer {JSON.stringify(coordinates)}</Text> */}
    </S.Container>
  );
};

export default Accelerometer;
