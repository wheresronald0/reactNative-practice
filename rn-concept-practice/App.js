import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandle(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandle() {
    setGoals([...goals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goal Here"
          style={styles.inputField}
          onChangeText={goalInputHandle}
          value={enteredGoal}
        />

        <Button title="Add" onPress={addGoalHandle} />
      </View>
      <FlatList
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputField: {
    width: 200,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    padding: 10,
  },
});
