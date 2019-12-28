import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Navbar from "./src/components/Navbar";
import AddTodo from "./src/components/AddTodo";
import Todo from "./src/components/Todo";

export default function App() {
  const [tasks, setTask] = useState([]);
  const addTodo = title => {
    setTask(prevTasks => [...prevTasks, { id: Date.now().toString(), title }]);
  };
  const removeItem = id => {
    setTask(prev => prev.filter(item => item.id != id));
  };
  return (
    <View>
      <Navbar title="ToDoApp" />
      <View style={styles.container}>
        <AddTodo handlerClick={addTodo} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Todo todo={item} removeOnClick={removeItem} />
          )}
          keyExtractor={item => item.id.toString()}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
