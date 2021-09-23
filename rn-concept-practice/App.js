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
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function addGoalHandle(goalTitle) {
    setGoals([...goals, { key: Math.random().toString(), value: goalTitle }]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandle} />
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
});
