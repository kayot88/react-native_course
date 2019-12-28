import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const Todo = ({ todo, removeOnClick }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.1}
      onLongPress={() => removeOnClick(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10
  }
});

export default Todo;
