import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Entypo'

import { Block, Text, Button } from '../components'
import { theme } from '../constants'

import { Forgot } from '../screens/Forgot'

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


function Clipboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Clipboard!</Text>
    </View>
  );
}

function Recents() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recents!</Text>
    </View>
  );
}

function Favourites() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favourites!</Text>
    </View>
  );
}
function Devices() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Devices!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Clipboard"
      activeColor="#f0edf6"
      inactiveColor="#026356"
      barStyle={{ backgroundColor: theme.colors.primary }}
    >
      <Tab.Screen
        name="Clipboard"
        component={Clipboard}
        options={{
          tabBarLabel: 'Clipboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Recents"
        component={Recents}
        options={{
          tabBarLabel: 'Recents',
          tabBarIcon: ({ color }) => (
            <Icon2 name="back-in-time" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Devices"
        component={Devices}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({ color }) => (
            <Icon name="devices" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class Home extends Component {
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
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
