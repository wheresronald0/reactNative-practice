import { StatusBar } from "expo-status-bar";
import { reduceRight } from "lodash";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Image,
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
    setAddMode(false);
  };

  const removeGoalHandle = (goalKey) => {
    console.log("handle working");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  const cancelGoalHandle = () => {
    setAddMode(false);
  };

  return (
    <View>
      <View>
        <Image
          style={styles.headerImage}
          source={require("./assets/goals_header.jpg")}
        />
      </View>
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setAddMode(true)} />
        <GoalInput
          isVisible={addMode}
          onAddGoal={addGoalHandle}
          onCancel={cancelGoalHandle}
        />
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "white",
  },
  headerImage: {
    width: "100%",
    height: "50%",
    marginTop: 50,
  },
});
