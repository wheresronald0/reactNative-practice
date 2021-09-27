import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
          <View style={styles.buttons}>
            <Button title="Add" onPress={addGoalHandle} />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
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
  inputButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 5,
  },
  buttons: {
    width: "40%",
  },
});
export default GoalInput;
