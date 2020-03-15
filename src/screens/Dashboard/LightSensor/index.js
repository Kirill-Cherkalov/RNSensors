import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import LightSensor from "./LightSensor";

const { SensorManager } = NativeModules;

export default () => {
  useFocusEffect(
    useCallback(() => {
      SensorManager.startLightSensor(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount LightSensor");
      DeviceEventEmitter.addListener("LightSensor", function(data) {
        console.log("LightSensor", data);
      });

      return () => {
        console.log("unsunsctibe LightSensor");
        SensorManager.stopLightSensor();
      };
    }, []),
  );

  return <LightSensor />;
};
