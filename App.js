import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem"; 



export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  }

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.mainView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInputADD}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value}/>}
      />
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
  },

});
