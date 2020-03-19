import React, { Component } from 'react'
import { Keyboard, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Text, Block, Button, Input } from '../components'
import { theme, images } from '../constants'

export default class Clipboard extends Component {
    state = {
        text: "",
    }


    render() {
        return (
            <KeyboardAvoidingView behavior="height" style={styles.login}>
                <Block color={theme.colors.white} bottom padding={[100, theme.sizes.base * 2]}>
                    <TextInput
                        style={{ height: 100, fontSize: 16}}
                        multiline
                        editable
                        onChangeText={txt => this.setState({text: txt})}
                        placeholder="Insert text to send"
                        placeholderTextColor={theme.colors.gray}
                        value={this.state.text}
                    />
                </Block>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    keyAvoid: {
        flex: 1,
        justifyContent: 'center',
    },
})
