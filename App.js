import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
  const [tasks, setTask] = useState([
    { id: "1", title: "To learn React Native" },
    { id: "2", title: "To learn Kubernetes" }
  ]);
  const [screenId, setScreenId] = useState(null);
  const addTodo = title => {
    setTask(prevTasks => [...prevTasks, { id: Date.now().toString(), title }]);
  };
  const removeItem = id => {
    setTask(prev => prev.filter(item => item.id != id));
  };
  let content = (
    <MainScreen
      tasks={tasks}
      addTodo={addTodo}
      removeItem={removeItem}
      openTodo={setScreenId}
    />
  );
  if (screenId) {
    const selectedTodo = tasks.find((task) => (task.id == screenId));
    console.log(selectedTodo);
    content = (
      <TodoScreen goBack={() => setScreenId(null)} todo={selectedTodo} />
    );
  }
  return (
    <View>
      <Navbar title="ToDoApp" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
