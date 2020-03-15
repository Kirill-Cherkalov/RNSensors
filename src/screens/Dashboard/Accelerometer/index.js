import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import Accelerometer from "./Accelerometer";

const { SensorManager } = NativeModules;

export default () => {
  const [coordinates, updateCoordinates] = useState({ x: 0, y: 0, z: 0 });

  useFocusEffect(
    useCallback(() => {
      SensorManager.startAccelerometer(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount Accelerometer");
      DeviceEventEmitter.addListener("Accelerometer", function(data) {
        console.log("Accelerometer", data);
        updateCoordinates(data);
      });

      return () => {
        console.log("unsunsctibe Accelerometer");
        SensorManager.stopAccelerometer();
      };
    }, []),
  );

  return <Accelerometer coordinates={coordinates} />;
};
