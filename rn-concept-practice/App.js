import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [goals, setGoals] = useState([]);

function goalInputHandle(enteredText) {
  setEnteredGoal(enteredText);
}
function addGoalHandle() {
  setGoals([...goals, enteredGoal]);
}

  return (
    <View style={styles.screen}>
     <View style={styles.inputContainer}>
       <TextInput 
       placeholder="Enter Goal Here" 
       style={styles.input}
       onChangeText={goalInputHandle}
       value = {enteredGoal}
       />
       
       <Button title="Add" onPress={addGoalHandle}/>
     </View> 
     <View>
       {goals.map(function (goal) {
         return <View style={styles.list} key={goal}><Text>{goal}</Text></View>;
       } )}
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  screen: {
    padding: 50,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: 200, 
    borderBottomColor: 'blue', 
    borderBottomWidth: 1, 
    padding: 10
  },
  list: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black'
  }
});
