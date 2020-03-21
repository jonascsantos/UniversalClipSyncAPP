import React, { Component } from 'react'
import { Keyboard, TextInput, ScrollView, StyleSheet } from 'react-native'

import { Text, Block, Button, Input, Divider, Card, CardDevice } from '../components'
import { theme, images } from '../constants'

import Icon  from '../components/Icons'; 

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
                        <CardDevice iconSet="Entypo" iconName="windows-store"  warning>
                            Windows
                        </CardDevice>

                        <Card row center style={styles.deviceItem} color="#E74C3C">
                            <Block
                                color="rgba(0,0,0,0.10)"
                                middle
                                center
                                flex={false}
                                style={styles.wrapIcon}
                            >
                                <Icon.Ionicons name="ios-phone-portrait" size={20} color="white" />
                            </Block>
                            <Text caption style={styles.textCard} color="white">My Android</Text>
                        </Card>

                        <Card row center style={styles.deviceItem} color="rgba(0,0,0,0.07)">
                            <Block
                                color="#F9F9F9"
                                middle center
                                flex={false}
                                style={styles.wrapIcon}
                            >
                                <Icon.Ionicons name="ios-phone-portrait" size={20} color="rgba(0,0,0,0.4)" />
                            </Block>
                            <Text caption style={styles.textCard} color="rgba(0,0,0,0.4)">IPhone 11</Text>
                        </Card>

                        <Card row center style={styles.deviceItem} color={theme.colors.primary}>
                            <Block
                                color="rgba(0,0,0,0.10)"
                                middle
                                center
                                flex={false}
                                style={styles.wrapIcon}
                            >
                                <Icon.Ionicons name="ios-desktop" size={20} color={theme.colors.gray3} />
                            </Block>
                            <Text caption style={styles.textCard} color={theme.colors.gray3}>My Macbook</Text>
                        </Card>

                        <Card row center style={styles.deviceItem} color="rgba(0,0,0,0.07)">
                            <Block
                                color="#F9F9F9"
                                middle
                                center
                                flex={false}
                                style={styles.wrapIcon}
                            >
                                <Icon.FontAwesome name="linux" size={20} color="rgba(0,0,0,0.4)" />
                            </Block>
                            <Text caption style={styles.textCard} color="rgba(0,0,0,0.4)">Linux Device</Text>
                        </Card>
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

