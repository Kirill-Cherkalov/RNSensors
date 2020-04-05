import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DeviceEventEmitter, NativeModules } from "react-native";

import LightSensor from "./LightSensor";

const { SensorManager } = NativeModules;

const func = {
  ph: value => (value * 0.0001).toFixed(3),
  mph: value => (value * 0.01).toFixed(3),
  fc: value => (value * 0.09290304000008).toFixed(3),
  mfc: value => value,
  squareMeter: value => value,
  squareCm: value => (value * 0.0001).toFixed(3),
  squareFoot: value => (value * 0.09290304000008).toFixed(3),
  squareInch: value => (value * 0.0006452).toFixed(3),
};

const CGS = [
  {
    label: "фот (ph)",
    value: func.ph,
  },
  {
    label: "миллифот",
    value: func.mph,
  },
];

const photographicUnits = [
  {
    label: "фут-кандела (fc)",
    value: func.fc,
  },
  {
    label: "метр-кандела",
    value: func.mfc,
  },
];

const perArea = [
  {
    label: "люмен на квадратный дюйм (lm/in²)",
    value: func.squareInch,
  },
  {
    label: "люмен на квадратный фут (lm/ft²)",
    value: func.squareFoot,
  },
  {
    label: "люмен на квадратный сантиметр (lm/cm²)",
    value: func.squareCm,
  },
  {
    label: "люмен на квадратный метр (lm/m²)",
    value: func.squareMeter,
  },
];

const anotherMeasure = [
  {
    label: "скот",
    value: value => (value * 3.142).toFixed(3),
  },
  {
    label: "фут-ламберт",
    value: value => (value * 0.2919).toFixed(3),
  },
  {
    label: "нокс",
    value: value => value * 1000,
  },
  {
    label: "брил",
    value: value => value * 31415927,
  },

  {
    label: "блондель",
    value: value => (value * 3.142).toFixed(3),
  },
  {
    label: "стилб (sb)",
    value: value => (value * 0.0001).toFixed(3),
  },
  {
    label: "апостилб (asb)",
    value: value => (value * 3.142).toFixed(3),
  },
  {
    label: "нит (nt)",
    value: value => value,
  },
];

const cards = [
  {
    title: "Текущее значение",
    list: [
      {
        label: "Люкс (lux)",
        value: value => value,
        tooltip:
          "Люкс (лк) — единица измерения освещённости в Международной системе единиц (СИ). Один люкс равен освещённости поверхности площадью 1 м² при световом потоке падающего на неё излучения, равном 1 лм: 1 лк = 1 лм/м² = 1 кд·ср·м⁻².",
      },
    ],
  },
  {
    title: "Система единиц СГС (сантиметр-грамм-секунда)",
    list: CGS,
  },
  {
    title: "Фотографические единицы",
    list: photographicUnits,
  },
  {
    title: "Единицы силы света на площадь",
    list: perArea,
  },
  {
    title: "Другие единицы",
    list: anotherMeasure,
  },
];

export default () => {
  const [lightData, setData] = useState(0);

  useFocusEffect(
    useCallback(() => {
      SensorManager.startLightSensor(500); // To start the accelerometer with a minimum delay of 100ms between events.
      console.log("mount LightSensor");
      DeviceEventEmitter.addListener("LightSensor", ({ light }) => {
        setData(light);
      });

      return () => {
        console.log("unsunsctibe LightSensor");
        SensorManager.stopLightSensor();
      };
    }, []),
  );

  return <LightSensor lightData={lightData} cards={cards} />;
};
