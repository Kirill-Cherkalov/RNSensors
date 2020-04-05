import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Value = ({ name, value }) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
);

const Magnetometer = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Magnetometer values</Text>
      {Object.keys(data).map(axis => (
        <Value key={axis} name={axis} value={data[axis]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  headline: {
    fontSize: 30,
    textAlign: "left",
    margin: 10,
  },
  valueContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  valueValue: {
    width: 200,
    fontSize: 20,
  },
  valueName: {
    width: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default Magnetometer;
