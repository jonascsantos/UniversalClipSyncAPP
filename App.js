import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  }

  return (
    <View style={{ padding: 30 }}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },



});
