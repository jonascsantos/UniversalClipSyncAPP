import React, { Component } from 'react'
import { StyleSheet, StatusBar } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from '../components/Icons';

import { Block, Text, Button } from '../components'
import { theme } from '../constants'
import Clipboard from '../screens/Clipboard'
import Recents from '../screens/Recents'
import Favourites from '../screens/Favourites'
import Devices from '../screens/Devices'
import DeviceItemScreen from '../screens/DeviceItemScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

function LogoTitle() {
  return (
    <Block bottom row left>
      <Text color={theme.colors.gray3} h1 bold style={{ marginRight: 2 }}>Universal</Text>
      <Text color={theme.colors.gray3} h2 medium bottom style={{ paddingLeft: 2, paddingBottom: 1.5 }}>Clip</Text>
      <Text color={theme.colors.gray3} bottom medium italic h2 style={{ paddingBottom: 1.5 }} >Sync</Text>
    </Block>
  );
}

function MenuButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }}>
      <Button color={theme.colors.primary} style={{ width: 50, borderRadius: 50 }}>
        <Block middle center row>
          <Icon.MaterialIcons name="menu" size={30} color={theme.colors.gray3} />
        </Block>
      </Button>
    </TouchableOpacity>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const StackDevice = createStackNavigator();
const Drawer = createDrawerNavigator();

function Home2() {
  return (
    <Block>
      <Text>test</Text>
    </Block>
  )
}

function HomeStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MyTabs"
      //headerMode="screen"
      screenOptions={{
        headerStyle: {
          height: theme.sizes.base * 6,
          backgroundColor: theme.colors.white,
          borderBottomColor: "transparent",
          elevation: 0,
        },
        headerBackImage: () => <Icon.MaterialIcons name="arrowleft" size={30} color={theme.colors.gray3} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
          alignItems: 'center',
          marginLeft: 5,
          paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
          alignItems: 'center',
          paddingRight: theme.sizes.base,
        },
        headerTitle: props => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerLeft: ({ navigation }) => (
          <MenuButton navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
      />
    </Stack.Navigator>
  );
}

const DeviceStackNavigator = () => {
  return (
    <StackDevice.Navigator>
      <StackDevice.Screen
        name="Devices"
        component={Devices}
        options={{
          headerShown: false,

        }}
      />
      <StackDevice.Screen
        name="DeviceItemScreen"
        component={DeviceItemScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackDevice.Navigator>
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
            <Icon.MaterialCommunityIcons name="clipboard" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Recents"
        component={Recents}
        options={{
          tabBarLabel: 'Recents',
          tabBarIcon: ({ color }) => (
            <Icon.Entypo name="back-in-time" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color }) => (
            <Icon.MaterialCommunityIcons name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DeviceStackNavigator}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons name="devices" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class Home extends Component {
  render() {
    StatusBar.setBackgroundColor("rgba(0,0,0,0.1)", true)

    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackNavigator} />
          <Drawer.Screen name="Home2" component={Home2} />
        </Drawer.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
