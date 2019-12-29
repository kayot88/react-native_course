import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Main screen" onPress={goBack} />
    </View>
  );
};

export default TodoScreen;
