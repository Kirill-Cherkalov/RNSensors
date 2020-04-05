import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import Magnetometer from "./Magnetometer";

const { SensorManager } = NativeModules;

export default () => {
  const [data, update] = useState({ x: 0, y: 0, z: 0 });

  useFocusEffect(
    useCallback(() => {
      SensorManager.startMagnetometer(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount Magnetometer");
      DeviceEventEmitter.addListener("Magnetometer", function(data) {
        console.log("Magnetometer", data);
        update(data);
      });

      return () => {
        console.log("unsunsctibe Magnetometer");
        SensorManager.stopMagnetometer();
      };
    }, []),
  );

  return <Magnetometer {...{ data }} />;
};
