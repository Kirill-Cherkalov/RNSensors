import React, { Fragment } from "react";
import { View, Text, FlatList } from "react-native";
import { Card, Divider } from "react-native-elements";

const LightSensor = ({ lightData, cards }) => {
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item: { title, list } }) => (
    <Card title={title} containerStyle={{ borderRadius: 10 }}>
      {list.map((u, i) => {
        return (
          <Fragment key={i}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: "flex-end",
              }}
            >
              <View style={{ flex: 0.8, flexDirection: "row", flexWrap: "wrap" }}>
                <Text style={{ flexWrap: "wrap" }}>{u.label}</Text>
              </View>
              <Text>{u.value(lightData)}</Text>
            </View>
            <Divider style={{ marginHorizontal: 15 }} />
          </Fragment>
        );
      })}
    </Card>
  );

  return <FlatList data={cards} {...{ renderItem, keyExtractor }} />;
};

export default LightSensor;
