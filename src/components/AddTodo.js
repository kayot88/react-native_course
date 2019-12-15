import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = ({ handlerClick }) => {
  const pressHandler = () => {
    handlerClick("test");
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    padding: 10,
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    marginBottom: 15
  }
});

export default AddTodo;
