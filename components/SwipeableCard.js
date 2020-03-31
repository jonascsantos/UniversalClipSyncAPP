import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { theme } from "../constants";
import Block from "./Block";
import Card from "./Card";
import Text from "./Text";
import Icon from '../components/Icons';



class SwipeableCard extends Component {
    render() {
        const {
            children,
            
            ...props
        } = this.props;

        return (
            <Card style={styles.Wrapper} shadow >
                <Text style={styles.textStyle} numberOfLines={1}>
                    {children}
                </Text>
                <Block
                    middle
                    center
                    flex={false}
                    marginLeft={20}
                    marginRight={7}

                >
                    <Icon.AntDesign
                        name="heart"  //{heart1 ? "heart" : "hearto"}
                        size={25}
                        color={theme.colors.primary}
                    />
                </Block>
            </Card>
        )
    }
}

export default SwipeableCard;

const styles = StyleSheet.create({
    Wrapper: {
        paddingHorizontal: theme.sizes.base,
        borderRadius: 1,
        marginBottom: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    textStyle: {
        color: "#565656",
        flex: 1,
        fontSize: 16,
    },




})
