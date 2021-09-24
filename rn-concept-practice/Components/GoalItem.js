import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete}>
      <View style={styles.listOfGoals}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listOfGoals: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default GoalItem;
