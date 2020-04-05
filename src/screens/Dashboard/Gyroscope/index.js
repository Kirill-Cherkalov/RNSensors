import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import Gyroscope from "./Gyroscope";

const { SensorManager } = NativeModules;

export default () => {
  const [data, update] = useState({ x: 0, y: 0, z: 0 });

  useFocusEffect(
    useCallback(() => {
      SensorManager.startGyroscope(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount Gyroscope");
      DeviceEventEmitter.addListener("Gyroscope", function(data) {
        console.log("Gyroscope", data);
        update(data);
      });

      return () => {
        console.log("unsunsctibe gyroscope");
        SensorManager.stopGyroscope();
      };
    }, []),
  );

  return <Gyroscope data={data} />;
};
