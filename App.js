import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Navbar from "./src/components/Navbar";
import AddTodo from "./src/components/AddTodo";
import Todo from "./src/components/Todo";

export default function App() {
  const [tasks, setTask] = useState([]);
  const addTodo = title => {
    setTask(prevTasks => [...prevTasks, { id: Date.now().toString(), title }]);
  };

  return (
    <View>
      <Navbar title="ToDoApp" />
      <View style={styles.container}>
        <AddTodo handlerClick={addTodo} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={tasks}
          renderItem={todo => {
            // console.log(todo);
            return <Todo todo={todo} />;
          }}
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
