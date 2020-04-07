import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { theme } from "../constants";
import Block from "./Block";
import Card from "./Card";
import Text from "./Text";
import Icon from '../components/Icons';

class DeviceItem extends Component {

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

    render() {
        const {
            color,
            style,
            status,
            model,
            name,
            iconSet,
            iconName,
            ...props
        } = this.props;

        var IconSets = {
            Entypo: Icon.Entypo,
            MaterialCommunityIcons: Icon.MaterialCommunityIcons,
            SimpleLineIcons: Icon.SimpleLineIcons,
            MaterialIcons: Icon.MaterialIcons,
            FontAwesome: Icon.FontAwesome,
            Foundation: Icon.Foundation,
            EvilIcons: Icon.EvilIcons,
            Ionicons: Icon.Ionicons,
            Octicons: Icon.Octicons,
            Feather: Icon.Feather,
            Entypo: Icon.Entypo,
            Zocial: Icon.Zocial
        }

        var IconSet = IconSets[this.props.iconSet];

        return (
                <Card style={[styles.Wrapper, styles.padmarg]} padding={0} color={this.handleColors().colorCard} shadow>
                    <Block
                        color={this.handleColors().colorIconWrapper}
                        middle
                        center
                        flex={false}
                        style={styles.wrapIcon}
                    >
                        <IconSet name={this.props.iconName} size={27} color={this.handleColors().colorIcon} />
                    </Block>
                    <Block colunm>
                        <Text color={this.handleColors().colorText} numberOfLines={1}>
                            {name}
                        </Text>
                        <Text caption color={this.handleColors().colorTextCaption} numberOfLines={1}>
                            {model}
                        </Text>
                    </Block>
                    <Block
                        middle
                        center
                        flex={false}
                    >
                        <Icon.Entypo
                            name="chevron-right"
                            size={25}
                            color={this.handleColors().colorTextCaption}
                        />
                    </Block>
                </Card>
        )
    }
}

export default DeviceItem;

const styles = StyleSheet.create({
    Wrapper: {
        borderRadius: 1,
        marginBottom: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10,
    },
    textStyle: {
        flex: 1,
        fontSize: 16,
    },
    wrapIcon: {
        marginHorizontal: 12,
        marginVertical: 10,
        width: 40,
        borderRadius: 40,
        height: 40,
    },
    padmarg: {
        padding: 0,
        margin: 0,
    }
})
