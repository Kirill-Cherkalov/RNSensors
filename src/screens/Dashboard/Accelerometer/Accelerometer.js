import React from "react";
import { View, Text } from "react-native";

const Accelerometer = ({ coordinates }) => {
  return (
    <View>
      <Text>Accelerometer {coordinates}</Text>
    </View>
  );
};

export default Accelerometer;
