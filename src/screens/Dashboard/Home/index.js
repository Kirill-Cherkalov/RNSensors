import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

import Home from "./Home";

export default () => {
  const navigation = useNavigation();

  const list = [
    {
      title: "Освещенность",
      leftAvatar: (
        <Icon raised name="lightbulb-on-outline" type="material-community" color="#f50" />
      ),
      onPress: () => navigation.navigate("LightSensor"),
    },
    {
      title: "Акселерометр",
      leftAvatar: <Icon raised name="move" type="feather" color="#f50" />,
      onPress: () => navigation.navigate("Accelerometer"),
    },
    {
      title: "Звуковой датчик",
      leftAvatar: <Icon raised name="sound" type="foundation" color="#f50" />,
      onPress: () => navigation.navigate("SoundLevel"),
    },
    {
      title: "Гироскоп",
      leftAvatar: <Icon raised name="rotate-orbit" type="material-community" color="#f50" />,
      onPress: () => navigation.navigate("Gyroscope"),
    },
    {
      title: "Шагомер",
      leftAvatar: <Icon raised name="counter" type="material-community" color="#f50" />,
      onPress: () => navigation.navigate("StepCounter"),
    },
    {
      title: "Магнитометр",
      leftAvatar: <Icon raised name="magnet-on" type="material-community" color="#f50" />,
      onPress: () => navigation.navigate("Magnetometer"),
    },
  ];

  useFocusEffect(
    useCallback(() => {
      console.log("Focus home screen");

      return () => {
        console.log("Unfocus home screen");
      };
    }, []),
  );

  return <Home list={list} />;
};
