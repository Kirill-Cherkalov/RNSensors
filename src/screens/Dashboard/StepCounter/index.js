import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import StepCounter from "./StepCounter";

const { SensorManager } = NativeModules;

export default () => {
  const [steps, update] = useState(0);
  const [startSteps, updateStart] = useState(0);

  useFocusEffect(
    useCallback(() => {
      SensorManager.startStepCounter(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount StepCounter");
      DeviceEventEmitter.once("StepCounter", function(data) {
        console.log("StepCounter once", data);
        updateStart(data.steps);
      });

      DeviceEventEmitter.addListener("StepCounter", function(data) {
        console.log("StepCounter", data);
        update(data.steps);
      });

      return () => {
        console.log("unsunsctibe StepCounter");
        SensorManager.stopStepCounter();
      };
    }, []),
  );

  return <StepCounter steps={steps - startSteps} allSteps={steps} />;
};
