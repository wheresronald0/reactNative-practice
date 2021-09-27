import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandle = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandle = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.isVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goal Here"
          style={styles.inputField}
          onChangeText={goalInputHandle}
          value={enteredGoal}
        />
        <View style={styles.inputButtons}>
          <Button title="Add" onPress={addGoalHandle} />
          <Button title="Cancel" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: 200,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    padding: 10,
  },
  inputButtons: {},
});
export default GoalInput;
