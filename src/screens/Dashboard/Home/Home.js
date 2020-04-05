import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const App = ({ list }) => {
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => <ListItem bottomDivider chevron={{ size: 30 }} {...item} />;

  return (
    <View>
      <FlatList data={list} {...{ renderItem, keyExtractor }} />
    </View>
  );
};

export default App;
