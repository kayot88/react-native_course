import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

const AddTodo = ({ handlerClick }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      handlerClick(value);
      setValue("");
    } else {
      Alert.alert('Can`t be empty')
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={"Enter task"}
        autoCorrect={true}
        keyboardType='default'
        autoCapitalize="words"
      />
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
