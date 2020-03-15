import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {DeviceEventEmitter, NativeModules} from 'react-native';

const {SensorManager} = NativeModules;

import Accelerometer from './Accelerometer';

export default () => {
  useFocusEffect(
    useCallback(() => {
      SensorManager.startAccelerometer(1000); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log('mount Accelerometer');
      DeviceEventEmitter.addListener('Accelerometer', function(data) {
        console.log('Accelerometer', data);
      });

      return () => {
        console.log('unsunsctibe Accelerometer');
        SensorManager.stopAccelerometer();
      };
    }, []),
  );

  return <Accelerometer />;
};
