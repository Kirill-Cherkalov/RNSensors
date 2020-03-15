import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import Thermometer from "./Thermometer";

const { SensorManager } = NativeModules;

export default () => {
  useFocusEffect(
    useCallback(() => {
      SensorManager.startThermometer(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount Thermometer");
      DeviceEventEmitter.addListener("Thermometer", function(data) {
        console.log("Thermometer", data);
      });

      return () => {
        console.log("unsunsctibe Thermometer");
        SensorManager.stopThermometer();
      };
    }, []),
  );

  return <Thermometer />;
};
