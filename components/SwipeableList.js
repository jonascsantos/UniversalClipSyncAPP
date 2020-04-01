import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Block from "./Block";

class SwipeableList extends Component {
  render() {
    const { children } = this.props
    return <Block style={styles.list}>{children}</Block>
  }
}

export default SwipeableList;

const styles = StyleSheet.create({
  list: {
    marginTop: 7,
    marginBottom: 4,
    marginHorizontal: 7,
  },
});