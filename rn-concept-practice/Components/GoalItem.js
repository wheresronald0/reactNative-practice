import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
    return
    <View style=
        {styles.list}
        key={goal}>
        <Text>{props.title}</Text>
    </View>
}

const styles = StyleSheet.create({
    list: {
        marginVertical: 8,
        padding: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black'
    })

export default GoalItem;