import React, { useCallback, useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules, Animated } from "react-native";
// import Animated, { Easing } from "react-native-reanimated";

import Accelerometer from "./Accelerometer";

const { SensorManager } = NativeModules;

const GAME_FIELD_X = -25 + 125 + 250 / 20;
const GAME_FIELD_Y = -25 + 125 - 250 / 20;

const UPDATE_TIME = 500; // ms

export default () => {
  const [coordinates] = useState(new Animated.ValueXY({ x: GAME_FIELD_X, y: 0 }));
  const [syncCoord, updateCoordinates] = useState({ x: 0, y: 0 });

  useFocusEffect(
    useCallback(() => {
      SensorManager.startAccelerometer(UPDATE_TIME);
      console.log("mount Accelerometer");
      DeviceEventEmitter.addListener("Accelerometer", function(data) {
        Animated.timing(coordinates, {
          toValue: {
            x: -27 + 125 + (250 / 20) * +data.x.toFixed(5), // -27
            y: 0 + -26.5 + 125 - (250 / 20) * +data.y.toFixed(5), // 26.5
          },
          duration: UPDATE_TIME,
          useNativeDriver: true, // <-- Add this
        }).start();
      });

      return () => {
        console.log("unsunsctibe Accelerometer");
        SensorManager.stopAccelerometer();
      };
    }, []),
  );

  return <Accelerometer coordinates={coordinates} syncCoord={syncCoord} />;
};
