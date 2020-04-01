import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { SwipeableCard, SwipeableList } from '../components'
import { theme, mocks } from '../constants'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Favourites extends Component {
    state = {
        heart1: true,
    }

    handleHeart() {
        const { heart1 } = this.state;
        this.setState({ heart1: !heart1 })
    }

    render() {
        return (
            <ScrollView>
                <SwipeableList>
                    <TouchableWithoutFeedback onPress={() => { this.handleHeart() }}>
                        {mocks.favourites.map((item, index) => {
                            return (
                                <SwipeableCard
                                    key={`step-${index}`}
                                    onSwipeFromLeft={() => { alert("Swiped from left!") }}
                                    onRightPress={() => { alert("Pressed Right!") }}
                                    heart={this.state.heart1 ? "heart" : "hearto"}
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

const styles = StyleSheet.create({})
