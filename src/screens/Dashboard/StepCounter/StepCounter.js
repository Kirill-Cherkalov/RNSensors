import React from "react";
import { View, Text } from "react-native";

const StepCounter = ({ steps, allSteps }) => {
  return (
    <View>
      <Text>StepCounter</Text>
      <Text>Всего шагов: {allSteps}</Text>
      <Text>Текущее количетсво шагов: {steps}</Text>
    </View>
  );
};

export default StepCounter;
