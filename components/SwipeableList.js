import React, { Component } from 'react'

class SwipeableList extends Component {
  render() {
    const { children } = this.props
    return <div style={styles.list}>{children}</div>
  }
}

export default SwipeableList;

const styles = StyleSheet.create({
    list: {
            flex: 1,
            width: "100%",
            height: "100%",
    },  
  });