import React, { Component } from 'react'
import { Keyboard, TextInput, ScrollView, StyleSheet } from 'react-native'

import { Text, Block, Button, Input, Divider, Card, CardDevice } from '../components'
import { theme, mocks } from '../constants'

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
                        {mocks.devices.map((item, index) => {
                            return (
                                <CardDevice
                                    key={`step-${index}`}
                                    iconSet={item.icon[0]}
                                    iconName={item.icon[1]}
                                    status={item.status}
                                >
                                    {item.name}
                                </CardDevice>
                            );
                        })}
                    </Block>

                    <Divider center style={{ width: "100%" }} />

                    <Block row style={styles.iconContainer}>
                        <Block flex={false} center middle>
                            <Block middle center style={styles.iconWrapper}>
                                <Icon.Entypo name="mask" size={30} color={theme.colors.disabledIconTextGray} />
                            </Block>
                            <Text caption color={theme.colors.disabledIconTextGray}>Anonymous Mode</Text>
                        </Block>
                        <Block flex={false} center middle>
                            <Block middle center style={styles.iconWrapper}>
                                <Icon.Zocial name="email" size={30} color={theme.colors.disabledIconTextGray} />
                            </Block>
                            <Text caption color={theme.colors.disabledIconTextGray}>Send to Email</Text>
                        </Block>
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
    iconContainer: {
        justifyContent: "space-evenly",
        marginBottom: 15,
    },
    iconWrapper: {
        backgroundColor: theme.colors.disabledCard,
        height: 50,
        width: 50,
        borderRadius: 100,
    },

})

