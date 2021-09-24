import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandle(enteredText) {
    setEnteredGoal(enteredText);
  }
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goal Here"
          style={styles.inputField}
          onChangeText={goalInputHandle}
          value={enteredGoal}
        />

        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
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
});
export default GoalInput;
