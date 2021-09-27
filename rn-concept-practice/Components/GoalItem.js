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
        <Text style={styles.listText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listOfGoals: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgb(237, 209, 135)",
  },
  listText: {
    //color: "rgb(137,125,105)",
    color: "rgb(87, 79, 76)",
  },
});

export default GoalItem;
