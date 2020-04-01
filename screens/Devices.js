import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { DeviceItem, SwipeableList } from '../components'
import { theme, mocks } from '../constants'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Devices extends Component {
    render() {
        return (
            <ScrollView>
                <SwipeableList>
                    <TouchableWithoutFeedback onPress={() => {}}> 
                        {mocks.devices.map((item, index) => {
                            return (
                                <DeviceItem
                                    key={`step-${index}`}
                                >
                                    {item.name}
                                </DeviceItem>
                            );
                        })}
                    </TouchableWithoutFeedback>
                </SwipeableList>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
