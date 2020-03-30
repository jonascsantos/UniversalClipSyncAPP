import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class SwipeableCard extends Component {
    render() {
        const {
            children,
            ...props
          } = this.props;
      
        return (
            <View style={styles.Wrapper}>
                <View style={styles.Background}>
                    <Text> textInComponent </Text>
                </View>
                <View style={styles.ListItem}>{this.props.children}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
