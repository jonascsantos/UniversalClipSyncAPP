import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    console.log(enteredGoal);
  }

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.mainView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInputADD}
          onChangeText= {goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },

  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },

  textInputADD: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }

});
