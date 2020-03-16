import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Text, Block, Button } from '../components'
import { theme } from '../constants'

export default class Login extends Component {
    static NavigationOptions = {

    }
    render() {
        return (
            <Block>
                <Text> Login </Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({})
