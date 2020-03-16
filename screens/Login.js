import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Text, Block, Button, Input } from '../components'
import { theme } from '../constants'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    static navigationOptions = { headerShown: false };
    render() {
        return (
            <Block padding={[0, theme.sizes.padding * 2]}>
                <Text h1 bold> Login </Text>
                <Block middle>
                    <Input
                        label="Email"
                        style={styles.input}
                        defaultValue={this.state.email}
                        onChangeText={text => this.setState({ email: text})}
                    />
                    <Input
                        secure
                        label="Password"
                        style={styles.input}
                        defaultValue={this.state.password}
                        onChangeText={text => this.setState({ password: text})}
                    />


                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({})
