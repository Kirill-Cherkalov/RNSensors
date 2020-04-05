import React, { useMemo, useState } from "react";

import Flex from "components/Container";

import * as S from "./styles";

const CoordinateItem = ({ label, value }) => (
  <Flex.Column
    style={{
      alignItems: "center",
    }}
  >
    <S.Value>{value}</S.Value>
    <S.Label>{label}</S.Label>
  </Flex.Column>
);

const Accelerometer = ({ coordinates, syncCoord }) => {
  return (
    <S.Container>
      <S.Game>
        <S.GameField>
          <S.Ball
            style={{
              transform: coordinates.getTranslateTransform(),
            }}
          />
          <S.Circle>
            <S.SuccessField />
          </S.Circle>
        </S.GameField>
      </S.Game>
    </S.Container>
  );
};

export default Accelerometer;
