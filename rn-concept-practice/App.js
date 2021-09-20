import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
     <View>
       <TextInput 
       placeholder="Enter Goal Here" 
       style={{ borderBottomColor: 'blue', borderBottomWidth: 1, padding: 10}}/>
       <Button title="Add"/>
     </View> 
     <View>
       
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
