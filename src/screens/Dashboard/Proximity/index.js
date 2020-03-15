import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import Proximity from "./Proximity";

const { SensorManager } = NativeModules;

export default () => {
  useFocusEffect(
    useCallback(() => {
      SensorManager.startProximity(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount Proximity");
      DeviceEventEmitter.addListener("Proximity", function(data) {
        console.log("Proximity", data);
      });

      return () => {
        console.log("unsunsctibe Proximity");
        SensorManager.stopProximity();
      };
    }, []),
  );

  return <Proximity />;
};
