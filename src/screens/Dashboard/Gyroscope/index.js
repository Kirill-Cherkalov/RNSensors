import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import Gyroscope from "./Gyroscope";

const { SensorManager } = NativeModules;

export default () => {
  useFocusEffect(
    useCallback(() => {
      SensorManager.startGyroscope(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount Gyroscope");
      DeviceEventEmitter.addListener("Gyroscope", function(data) {
        console.log("Gyroscope", data);
      });

      return () => {
        console.log("unsunsctibe gyroscope");
        SensorManager.stopGyroscope();
      };
    }, []),
  );

  return <Gyroscope />;
};
