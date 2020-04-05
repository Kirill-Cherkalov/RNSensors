import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import RNSoundLevel from "react-native-sound-level";
import throttle from "lodash/throttle";

import SoundLevel from "./SoundLevel";

const MAX_POINTS = 160;

export default () => {
  const [DBData, update] = useState(0);

  useFocusEffect(
    useCallback(() => {
      console.log("mount Sound");
      RNSoundLevel.start();
      RNSoundLevel.onNewFrame = throttle(data => {
        console.log("Sound level info", data.value + 160);
        update(data.value + 160);
      }, 300);

      return () => {
        console.log("unsunsctibe Sound");
        RNSoundLevel.stop();
      };
    }, []),
  );
  const fill = (DBData * 100) / MAX_POINTS;

  return <SoundLevel fill={fill} MAX_POINTS={MAX_POINTS} />;
};
