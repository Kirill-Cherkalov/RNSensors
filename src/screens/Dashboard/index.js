import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Accelerometer from "./Accelerometer";
import Gyroscope from "./Gyroscope";
import LightSensor from "./LightSensor";
import Proximity from "./Proximity";
import Thermometer from "./Thermometer";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        paddingBottom: 0,
        height: 40,
      },
      tabStyle: {
        justifyContent: "center",
      },
    }}
  >
    {/* <Tab.Screen name="Home" component={Home} /> */}
    <Tab.Screen name="Accelerometer" component={Accelerometer} />
    <Tab.Screen name="Gyroscope" component={Gyroscope} />
    <Tab.Screen name="LightSensor" component={LightSensor} />
    {/* <Tab.Screen name="Proximity" component={Proximity} /> */}
    {/* <Tab.Screen name="Thermometer" component={Thermometer} /> */}
  </Tab.Navigator>
);
