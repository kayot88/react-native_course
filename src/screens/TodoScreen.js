import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "./../components/theme";
import AppCard from "../components/ui/AppCard";

const TodoScreen = ({ goBack, todo, removeItem }) => {
  const { id, title } = todo;
  const removeTask = () => {
    return removeItem(id); //wtf
  };

  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Button title="Config" />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="REMOVE"
            color={THEME.DANGER_COLOR}
            onPress={removeTask}
          />
        </View>
        <View style={styles.button}>
          <Button title="RETURN" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  },
  card: {
    marginBottom: 20,
    padding: 15
  },
  title: {
    fontSize: 20
  }
});

export default TodoScreen;
