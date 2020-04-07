import React, { Component } from 'react'
import { StyleSheet, TextInput, Switch } from 'react-native'

import { Block, Text, Button, Divider } from '../components'
import Icon from '../components/Icons';
import { theme, mocks } from '../constants'

class DeviceItemScreen extends Component {
    state = {
        editing: null,
        device: {},
    };

    componentDidMount() {
        this.setState({ device: this.props.device });
    }

    handleColors() {
        const { status } = this.props;

        switch (status) {
            case 'warning':
                return {
                    colorText: "white",
                    colorCard: theme.colors.warningCard,
                    colorIconWrapper: theme.colors.grayIconWrapper,
                    colorIcon: "white",
                    colorTextCaption: "rgba(255,255,255,0.7)",
                }
            case 'ready':
                return {
                    colorText: theme.colors.gray3,
                    colorCard: theme.colors.white,
                    colorIconWrapper: theme.colors.grayIconWrapper2,
                    colorIcon: theme.colors.gray3,
                    colorTextCaption: theme.colors.disabledIconTextGray,
                }
            case 'disabled':
                return {
                    colorText: theme.colors.gray3,
                    colorCard: theme.colors.white,
                    colorIconWrapper: theme.colors.grayIconWrapper2,
                    colorIcon: theme.colors.gray3,
                    colorTextCaption: theme.colors.disabledIconTextGray,
                }
            default:
                return {
                    colorText: theme.colors.gray3,
                    colorCard: theme.colors.white,
                    colorIconWrapper: theme.colors.grayIconWrapper2,
                    colorIcon: theme.colors.gray3,
                    colorTextCaption: theme.colors.disabledIconTextGray,
                };
        }
    }

    renderEdit(name) {
        const { device, editing } = this.state;

        if (editing === name) {
            return (
                <TextInput
                    defaultValue={device[name]}
                    onChangeText={text => this.handleEdit([name], text)}
                />
            );
        }

        return <Text bold>{device[name]}</Text>;
    }

    handleEdit(name, text) {
        const { device } = this.state;
        device[name] = text;

        this.setState({ device });
    }

    toggleEdit(name) {
        const { editing } = this.state;
        this.setState({ editing: !editing ? name : null });
    }

    render() {
        const { device, editing } = this.state;

        return (

            <Block color="white" flex={1} padding={[theme.sizes.base, theme.sizes.base * 2]}>

                <Block flex={false} center middle>
                    <Block
                        color={this.handleColors().colorIconWrapper}
                        middle
                        center
                        flex={false}
                        style={styles.wrapIcon}
                    >
                        <Icon.Ionicons name={"ios-phone-portrait"} size={60} color={this.handleColors().colorIcon} />
                    </Block>
                </Block>

                <Block style={styles.inputs} >
                    <Block row space="between" style={styles.inputRow}>
                        <Block>
                            <Text gray style={{ marginBottom: 10 }}>
                                Name
                                </Text>
                            {this.renderEdit("name")}
                        </Block>
                        <Text
                            medium
                            secondary
                            onPress={() => this.toggleEdit("name")}
                        >
                            {editing === "name" ? "Save" : "Edit"}
                        </Text>
                    </Block>
                    <Block row space="between" style={styles.inputRow}>
                        <Block>
                            <Text gray style={{ marginBottom: 10 }}>
                                Model
                                </Text>
                            {this.renderEdit("device")}
                        </Block>
                        <Text
                            medium
                            secondary
                            onPress={() => this.toggleEdit("device")}
                        >
                            {editing === "device" ? "Save" : "Edit"}
                        </Text>
                    </Block>
                    <Block row space="between" style={styles.inputRow}>
                        <Block>
                            <Text gray style={{ marginBottom: 10 }}>
                                Status
                                </Text>
                            <Text bold>{device.status}</Text>
                        </Block>
                    </Block>
                </Block>

                <Block flex={false}>
                    <Divider />
                </Block>

                <Block style={styles.toggles}>
                    <Block
                        row
                        center
                        space="between"
                        style={{ marginBottom: theme.sizes.base * 2 }}
                    >
                        <Text gray>Notifications</Text>
                        <Switch
                            value={this.state.notifications}
                            onValueChange={value => this.setState({ notifications: value })}
                            ios_backgroundColor="rgba(168, 182, 200, 0.30)"
                            trackColor={{
                              // false: GRAY_COLOR,
                              true: theme.colors.secondary
                            }} 
                        />
                    </Block>

                    <Block
                        row
                        center
                        space="between"
                        style={{ marginBottom: theme.sizes.base * 2 }}
                    >
                        <Text gray>Auto Accept</Text>
                        <Switch
                            value={this.state.autoAccept}
                            onValueChange={value => this.setState({ autoAccept: value })}
                            ios_backgroundColor="rgba(168, 182, 200, 0.30)"
                            trackColor={{
                              // false: GRAY_COLOR,
                              true: theme.colors.secondary
                            }} 
                        />
                    </Block>

                    <Button gradient startColor="#FF416C" endColor="#FF4B2B">
                        <Text color="white" center light h3>Remove Device</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

DeviceItemScreen.defaultProps = {
    device: mocks.devices[0]
};

export default DeviceItemScreen;

const styles = StyleSheet.create({
    Wrapper: {
        borderRadius: 1,
        marginBottom: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10,
    },
    toggles: {
        paddingRight: 0,
    },
    textStyle: {
        flex: 1,
        fontSize: 16,
    },
    wrapIcon: {
        marginHorizontal: 12,
        marginVertical: 10,
        width: 80,
        borderRadius: 80,
        height: 80,
    },
    padmarg: {
        padding: 0,
        margin: 0,
    },
    modal: {
        width: "90%",
    },
    inputs: {
        marginTop: theme.sizes.base * 0.7,
        paddingRight: 10,
    },
    inputRow: {
        alignItems: "flex-end"
    },
})
