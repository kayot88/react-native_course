import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Alert
} from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
  const [tasks, setTask] = useState([
    { id: "1", title: "To learn React Native" },
    { id: "2", title: "To learn Kubernetes" }
  ]);


  const [screenId, setScreenId] = useState(null);
  console.log(screenId);
  const addTodo = title => {
    setTask(prevTasks => [...prevTasks, { id: Date.now().toString(), title }]);
  };

  const removeItem = id => {
    const todo = tasks.find(task => task.id === id);
    Alert.alert(
      "Remoning...",
      `Are you sure? To remove item ${todo.title}`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            setScreenId(null);
            setTask(tasks => tasks.filter(item => item.id != id));
          }
        }
      ],
      { cancelable: false }
    );
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
    const selectedTodo = tasks.find(task => task.id == screenId);
    // console.log(selectedTodo);
    content = (
      <TodoScreen
        goBack={() => setScreenId(null)}
        todo={selectedTodo}
        removeItem={removeItem}
      />
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
