import React, { Component } from 'react'
import { Keyboard, TextInput, ScrollView, StyleSheet } from 'react-native'

import { Text, Block, Button, Input, Divider, Card, CardDevice } from '../components'
import { theme, mocks } from '../constants'

import Icon from '../components/Icons';
import {  TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Clipboard extends Component {
    state = {
        text: "",
        anonymous: false,
        sendEmail: false,
    }

    handleAnonymous() {
        const { anonymous } = this.state;
        this.setState({ anonymous: !anonymous })
    }

    handleSendEmail() {
        const { sendEmail } = this.state;
        this.setState({ sendEmail: !sendEmail })
    }

    render() {
        const { anonymous, sendEmail } = this.state;

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Block color={theme.colors.white}>
                    <Block style={styles.input} padding={[theme.sizes.base, 18]}>
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

                    <Divider />

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

                    <Divider />

                    <Block row style={styles.iconContainer}>
                        <TouchableWithoutFeedback onPress={() => {this.handleAnonymous()}}>
                            <Block flex={false} center middle>
                                <Block
                                    middle
                                    center
                                    color={anonymous ? theme.colors.primary : theme.colors.disabledCard}
                                    style={styles.iconWrapper}
                                >
                                    <Icon.Entypo
                                        name="mask"
                                        size={30}
                                        color={anonymous ? theme.colors.gray3 : theme.colors.disabledIconTextGray}
                                    />
                                </Block>
                                <Text caption color={anonymous ? theme.colors.gray3 : theme.colors.disabledIconTextGray}>Anonymous Mode</Text>
                            </Block>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => {this.handleSendEmail()}}>
                            <Block flex={false} center middle>
                                <Block
                                    middle
                                    center
                                    color={sendEmail ? theme.colors.primary : theme.colors.disabledCard}
                                    style={styles.iconWrapper}
                                >
                                    <Icon.Zocial
                                        name="email"
                                        size={30}
                                        color={sendEmail ? theme.colors.gray3 : theme.colors.disabledIconTextGray}
                                    />
                                </Block>
                                <Text caption color={sendEmail ? theme.colors.gray3 : theme.colors.disabledIconTextGray}>Send to Email</Text>
                            </Block>
                        </TouchableWithoutFeedback>

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
        height: 50,
        width: 50,
        borderRadius: 100,
    },

})

