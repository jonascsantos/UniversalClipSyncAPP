import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{padding: 30 }}>
        <TextInput placeholder="course goal"/>
        <Button title="ADD"></Button>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
