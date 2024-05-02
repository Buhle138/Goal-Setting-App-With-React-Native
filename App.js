import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const[enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
   setEnteredGoalText(enteredText)
  };


  
  function addGoalHandler(){

    //EnteredGoalText below updates the currentCourseGoals (which is an array) that new list will then update courseGoals array.
      setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput} 
        placeholder='Your course goals!'
        onChangeText={goalInputHandler}
        />
      <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
       {courseGoals.map((goals) => <Text key={goals}>{goals}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex: 1,//filling up the max size of the entire application
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8 //making the text input box much larger. 
  },
  goalsContainer: {
    flex: 5
  }
});
