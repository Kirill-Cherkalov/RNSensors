import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Accelerometer from "./Accelerometer";
import Gyroscope from "./Gyroscope";
import LightSensor from "./LightSensor";
import Proximity from "./Proximity";
import SoundLevel from "./SoundLevel";
import Thermometer from "./Thermometer";
import StepCounter from "./StepCounter";
import Magnetometer from "./Magnetometer";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Magnetometer" component={Magnetometer} />
    <Tab.Screen name="StepCounter" component={StepCounter} />
    <Tab.Screen name="Thermometer" component={Thermometer} />
    <Stack.Screen name="Gyroscope" component={Gyroscope} />
    <Stack.Screen name="LightSensor" component={LightSensor} />
    <Stack.Screen name="SoundLevel" component={SoundLevel} />
    <Stack.Screen name="Accelerometer" component={Accelerometer} />
    {/* <Tab.Screen name="Proximity" component={Proximity} /> */}
  </Stack.Navigator>
);
