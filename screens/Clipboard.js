import React, { Component } from 'react'
import { Keyboard, TextInput, ScrollView, StyleSheet } from 'react-native'

import { Text, Block, Button, Input, Divider, Card } from '../components'
import { theme, images } from '../constants'

import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/FontAwesome'


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
                            <Icon name="cross" size={30} color={theme.colors.gray3} />
                        </Block>
                    </Block>

                    <Divider center style={{ width: "100%" }} />

                    <Block style={styles.devicesContainer}>
                        <Card row style={styles.deviceItem} color={theme.colors.primary}>
                            <Block flex={false} style={styles.wrapIcon}>
                                <Icon2 name="ios-desktop" size={30} color={theme.colors.gray3} />
                            </Block>
                            
                            <Text style={styles.textCard} color="white">My Android</Text>
                        </Card>
                        <Card style={styles.deviceItem} color={theme.colors.primary}>
                            <Text style={styles.textCard} color="white">My Android 2</Text>
                        </Card>
                        <Card style={styles.deviceItem} color={theme.colors.primary}>
                            <Text style={styles.textCard} color="white">Desktop</Text>
                        </Card>
                        <Card style={styles.deviceItem} color={theme.colors.primary}>
                            <Text style={styles.textCard} color="white">My Iphone</Text>
                        </Card>
                        <Card style={styles.deviceItem} color={theme.colors.primary}>
                            <Text style={styles.textCard} color="white">Linux</Text>
                        </Card>
                        <Block>
                                <Icon2 name="ios-phone-portrait" size={30} color={theme.colors.gray3} />
                            </Block>
                            <Block>
                                <Icon name="windows-store" size={30} color={theme.colors.gray3} />
                            </Block>
                            <Block>
                                <Icon3 name="linux" size={30} color={theme.colors.gray3} />
                            </Block>
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
        justifyContent: "space-evenly",
        alignContent: "space-around",
    },
    deviceItem: {
        flex: 0,
        borderRadius: 100,
    },
    textCard: {

    }
})

