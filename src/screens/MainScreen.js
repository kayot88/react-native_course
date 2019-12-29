import React from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";

const MainScreen = ({ addTodo, removeItem, tasks, openTodo }) => {
  return (
    <View>
      <AddTodo handlerClick={addTodo} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Todo todo={item} removeOnClick={removeItem} openTodo={openTodo} />
        )}
        keyExtractor={item => item.id.toString()}

      ></FlatList>
    </View>
  );
};

export default MainScreen;
