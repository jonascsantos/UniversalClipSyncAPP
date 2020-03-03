import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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