import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { theme } from "../constants";
import Block from "./Block";
import Card from "./Card";
import Text from "./Text";
import Icon from '../components/Icons';

class SwipeableCard extends Component {
    listElement
    wrapper
    background

    render() {
        const {
            children,
            ...props
        } = this.props;

        return (
            <Card style={styles.Wrapper} ref={div => (this.wrapper = div)} shadow >
                <Block style={styles.Background} ref={div => (this.background = div)}>
                    <Text> Delete </Text>
                </Block>
                <Text color="#565656" style={{ flex: 1, fontSize: 16 }} numberOfLines={1}>
                    {children}
                </Text>
                <Block style={styles.ListItem} ref={div => (this.listElement = div)}>

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
    Background: {

    },

    ListItem: {

    },

    recentsContainer: {
        marginVertical: 20,
        marginHorizontal: 5,
    },

    recent: {

    },



})
