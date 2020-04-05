import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const App = ({ fill, MAX_POINTS }) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={240}
        width={15}
        backgroundWidth={5}
        fill={fill}
        tintColor="#00ff00"
        tintColorSecondary="#ff0000"
        backgroundColor="#3d5875"
        arcSweepAngle={240}
        rotation={240}
        lineCap="round"
        duration={200}
      >
        {fill => <Text style={styles.points}>{Math.round((MAX_POINTS * fill) / 100)}dB</Text>}
      </AnimatedCircularProgress>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  points: {
    textAlign: "center",
    color: "#7591af",
    fontSize: 50,
    fontWeight: "100",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#152d44",
    padding: 50,
  },
  pointsDelta: {
    color: "#4c6479",
    fontSize: 50,
    fontWeight: "100",
  },
  pointsDeltaActive: {
    color: "#fff",
  },
});
