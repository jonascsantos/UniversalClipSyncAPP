import React, { Component } from 'react'
import { StyleSheet, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Entypo'



import { Block, Text, Button } from '../components'
import { theme } from '../constants'
import Clipboard from '../screens/Clipboard'
import Recents from '../screens/Recents'
import Favourites from '../screens/Favourites'
import Devices from '../screens/Devices'
import DeviceItemScreen from '../screens/DeviceItemScreen';

function LogoTitle() {
  return (
    <Block bottom row left>
      <Text color={theme.colors.gray3} h1 bold style={{ marginRight: 2 }}>Universal</Text>
      <Text color={theme.colors.gray3} h2 medium bottom style={{ paddingLeft: 2, paddingBottom: 1.5 }}>Clip</Text>
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

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function Home2({ navigation }) {
  return (
    <Block style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
    </Block>
  );
}

const DeviceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeviceItemScreen"
        component={DeviceItemScreen}
      />
    </Stack.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Clipboard"
      activeColor={theme.colors.gray3}
      inactiveColor="rgba(44,62,80, 0.7)"
      backBehavior="initialRoute"
      barStyle={{ backgroundColor: theme.colors.primary, paddingBottom: 5 }}
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
        component={Home2}
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
    StatusBar.setBackgroundColor("rgba(0,0,0,0.1)", true)

    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
