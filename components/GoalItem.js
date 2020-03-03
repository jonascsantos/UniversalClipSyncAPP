import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItems}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        backgroundColor: '#fefefe',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black'
      }
});

export default GoalItem;