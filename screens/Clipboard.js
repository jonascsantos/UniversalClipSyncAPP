import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Block, Text, Button } from '../components'
import { theme } from '../constants'
import Icon from 'react-native-vector-icons/MaterialIcons'


function LogoTitle() {
    return (
        <Block bottom row left>
            <Text color={theme.colors.gray3} h1 bold style={{ marginRight: 2 }}>Universal</Text>
            <Text color={theme.colors.gray3} h2 medium bottom style={{ paddingBottom: 1.5 }}>Clip</Text>
            <Text color={theme.colors.gray3} bottom medium italic h2 style={{ paddingBottom: 1.5 }} >Sync</Text>
        </Block>
    );
}

function MenuButton() {
    return (
        <Button color={theme.colors.primary} style={{ width: 50, borderRadius: 50 }}>
            <Block middle center row>
                <Icon name="menu" size={30} color={theme.colors.gray3} />
            </Block>
        </Button>
    );

}




export default class Clipboard extends Component {
    static navigationOptions = {
        headerTitle: props => <LogoTitle {...props} />,
        headerStyle: {
            backgroundColor: theme.colors.primary,
        },
        headerLeft: () => (
            <MenuButton />
        ),
    };




    render() {
        return (
            <Block>
                <Text h1 light> Clipboard </Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({})
