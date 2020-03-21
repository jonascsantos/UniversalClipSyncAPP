import React, { Component } from 'react'
import { Keyboard, TextInput, ScrollView, StyleSheet } from 'react-native'

import { Text, Block, Button, Input, Divider, Card, CardDevice } from '../components'
import { theme, images } from '../constants'

import Icon from '../components/Icons';

export default class Clipboard extends Component {
    state = {
        text: "",
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Block color={theme.colors.white}>
                    <Block style={styles.input} padding={[theme.sizes.base, theme.sizes.base]}>
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
                            <Icon.Entypo name="cross" size={30} color={theme.colors.gray3} />
                        </Block>
                    </Block>

                    <Divider center style={{ width: "100%" }} />

                    <Block style={styles.devicesContainer}>
                        <CardDevice iconSet="Entypo" iconName="windows-store" ready>
                            Desktop Windows
                        </CardDevice>
                        <CardDevice iconSet="Ionicons" iconName="ios-phone-portrait" warning>
                            My Android
                        </CardDevice>
                        <CardDevice iconSet="Ionicons" iconName="ios-phone-portrait" disabled>
                            IPhone 11
                        </CardDevice>
                        <CardDevice iconSet="Ionicons" iconName="ios-desktop" ready>
                            My Macbook
                        </CardDevice>
                        <CardDevice iconSet="FontAwesome" iconName="linux" disabled>
                            Linux Device
                        </CardDevice>
                    </Block>

                    <Divider center style={{ width: "100%" }} />

                    <Block row center middle>
                        <Text>Anonymous & send Email icons</Text>
                    </Block>
                </Block>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    input: {

    },
    devicesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    deviceItem: {
        marginHorizontal: 4,
        flex: 0,
        borderRadius: 40,
        padding: 4,
    },
    textCard: {
        paddingHorizontal: 10,

    },
    wrapIcon: {
        width: 30,
        borderRadius: 30,
        height: 30,
    }
})

