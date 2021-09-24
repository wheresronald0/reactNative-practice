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
  //const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  //Handers- named functions
  const addGoalHandle = (goalTitle) => {
    setGoals((currentGoals) => [
      ...goals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandle = (goalKey) => {
    console.log("handle working");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput isVisible={addMode} onAddGoal={addGoalHandle} />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            key={itemData.item.key}
            onDelete={removeGoalHandle.bind(this, itemData.item.key)}
          />
        )}
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
