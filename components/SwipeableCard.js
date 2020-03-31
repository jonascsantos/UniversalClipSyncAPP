import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableOpacity } from 'react-native'
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
            onSwipeFromLeft,
            onRightPress,
            ...props
        } = this.props;

        const LeftActions = (progress, dragX) => {
            const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            })
            return (
                <Block style={styles.leftAction}>
                    <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Delete</Animated.Text>
                </Block>
            );
        };

        const RightActions = ({progress, dragX, onPress}) => {
            const scale = dragX.interpolate({
                inputRange: [-100, 0],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            })
            return (
                <TouchableOpacity onPress={onPress}>
                    <Block style={styles.rightAction}>
                        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Delete2</Animated.Text>
                    </Block>
                </TouchableOpacity>

            );
        };

        return (
            <Swipeable
                renderLeftActions={LeftActions}
                onSwipeableLeftOpen={onSwipeFromLeft}
                renderRightActions={(progress, dragX) => <RightActions progress={progress} dragX={dragX} onPress={onRightPress} />}
            >
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
            </Swipeable>
        )
    }
}

export default SwipeableCard;

const styles = StyleSheet.create({
    Wrapper: {
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
    leftAction: {
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        flex: 1,
        height: "97%"
    },
    rightAction: {
        backgroundColor: '#dd2c00',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: "97%",
    },
    actionText: {
        color: 'white',
        fontWeight: '600',
        padding: 20,
    }





})
