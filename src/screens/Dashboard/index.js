import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Accelerometer from './Accelerometer';
import Gyroscope from './Gyroscope';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Accelerometer" component={Accelerometer} />
    <Tab.Screen name="Gyroscope" component={Gyroscope} />
  </Tab.Navigator>
);
