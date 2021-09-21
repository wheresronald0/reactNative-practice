import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

function goalInputHandler(enteredText) {
  setEnteredGoal(enteredText);
}
function addGoalHandler() {
  console.log(enteredGoal)
}

  return (
    <View style={styles.screen}>
     <View style={styles.inputContainer}>
       <TextInput 
       placeholder="Enter Goal Here" 
       style={styles.input}
       onChangeText={goalInputHandler}
       value = {enteredGoal}
       />
       
       <Button title="Add" onPress={addGoalHandler}/>
     </View> 
     <View>
       
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  screen: {
    padding: 50,
    backgroundColor: 'grey',
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
  }
});
