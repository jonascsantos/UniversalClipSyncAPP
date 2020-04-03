import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { DeviceItem, SwipeableList } from '../components'
import { theme, mocks } from '../constants'

import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

export default class Devices extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <SwipeableList>
          {mocks.devices.map((item, index) => {
            return (
              <TouchableOpacity key={`step-${index}`} onPress={() => { navigation.navigate('DeviceItem') }}>
                <DeviceItem
                  key={`step-${index}`}
                  name={item.name}
                  model={item.device}
                  iconSet={item.icon[0]}
                  iconName={item.icon[1]}
                  status={item.status}
                />
              </TouchableOpacity>
            );
          })}
        </SwipeableList>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
