import React, { Component } from 'react'
import { Keyboard, TextInput, ScrollView, StyleSheet, StatusBar } from 'react-native'

import { Text, Block, Button, Input, Divider, Card, CardDevice, SwipeableCard, SwipeableList } from '../components'
import { theme, mocks } from '../constants'

import Icon from '../components/Icons';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';


function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

export default class Clipboard extends Component {
    state = {
        text: "",
        anonymous: false,
        sendEmail: false,
        heart1: false,
    }

    handleAnonymous() {
        const { anonymous } = this.state;
        this.setState({ anonymous: !anonymous })
    }

    handleSendEmail() {
        const { sendEmail } = this.state;
        this.setState({ sendEmail: !sendEmail })
    }

    handleHeart() {
        const { heart1 } = this.state;
        this.setState({ heart1: !heart1 })
    }

    render() {
        const { anonymous, sendEmail, heart1 } = this.state;

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar translucent barStyle="light-content" backgroundColor="rgba(0,0,0,0.1)" />
                <Block color={theme.colors.white} style={styles.mainContainer}>
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
                                <TouchableOpacity
                                    key={`step-${index}`}
                                    onPress={() => { this.props.navigation.navigate('DeviceItemScreen', item) }}>
                                    <CardDevice
                                        key={`step-${index}`}
                                        iconSet={item.icon[0]}
                                        iconName={item.icon[1]}
                                        status={item.status}
                                    >
                                        {item.name}
                                    </CardDevice>
                                </TouchableOpacity>
                            );
                        })}
                    </Block>

                    <Divider />

                    <Block row style={styles.iconContainer}>
                        <TouchableWithoutFeedback onPress={() => { this.handleAnonymous() }}>
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

                        <TouchableWithoutFeedback onPress={() => { this.handleSendEmail() }}>
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

                <SwipeableList>
                    <TouchableWithoutFeedback onPress={() => { this.handleHeart() }}>
                        {mocks.recents.map((item, index) => {
                            return (
                                <SwipeableCard
                                    key={`step-${index}`}
                                    onSwipeFromLeft={() => { alert("Swiped from left!") }}
                                    onRightPress={() => { alert("Pressed Right!") }}
                                    heart={heart1 ? "heart" : "hearto"}
                                >
                                    {item.content}
                                </SwipeableCard>
                            );
                        })}
                    </TouchableWithoutFeedback>
                </SwipeableList>
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

    mainContainer: {
        // ...elevationShadowStyle(4),
        backgroundColor: 'white',
        marginBottom: 10,
    },

    recentsContainer: {
        marginVertical: 20,
        marginHorizontal: 5,
    },

    recent: {
        paddingHorizontal: theme.sizes.base,
        borderRadius: 1,
        marginBottom: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }

})

