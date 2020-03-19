import React, { Component } from 'react'
import { Keyboard, TextInput, ScrollView, StyleSheet } from 'react-native'

import { Text, Block, Button, Input, Divider } from '../components'
import { theme, images } from '../constants'

import Icon from 'react-native-vector-icons/Entypo'


export default class Clipboard extends Component {
    state = {
        text: "",
    }


    render() {
        return (

            <ScrollView showsVerticalScrollIndicator={false}>
                <Block style={styles.input} color={theme.colors.white} padding={[theme.sizes.base, theme.sizes.base]}>
                    <Block row space="between">
                        <TextInput
                            style={{ fontSize: 16 }}
                            multiline
                            editable
                            onChangeText={txt => this.setState({ text: txt })}
                            placeholder="Insert text to send"
                            placeholderTextColor={theme.colors.gray}
                            value={this.state.text}
                        />
                        <Icon name="cross" size={30} color={theme.colors.gray3} />


                    </Block>
                    <Divider center style={{ width: "100%" }} ></Divider>
                </Block>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    input: {
    
    },
})
