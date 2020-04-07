import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from '../components/Icons';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

import { theme } from '../constants'

const AuthStack = createStackNavigator();

function Screens() {
    return(
        <AuthStack.Navigator
            initialRouteName="Welcome"
            //headerMode="screen"
            screenOptions={{
                headerStyle: {
                    height: theme.sizes.base * 6,
                    backgroundColor: theme.colors.white,
                    borderBottomColor: "transparent",
                    elevation: 0,
                },
                headerBackImage:() => <Icon.AntDesign name="arrowleft" size={30} color={theme.colors.gray3} />,
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
            }}
        >
            <AuthStack.Screen 
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <AuthStack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <AuthStack.Screen 
                name="Forgot"
                component={Forgot}
                options={{
                    title: '' 
                }}
            />
            <AuthStack.Screen 
                name="SignUp"
                component={SignUp}
                options={{
                    title: '' 
                }}
            />
            <AuthStack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />

        </AuthStack.Navigator>
    );
}

function App() {
    return (
      <NavigationContainer>
          <Screens />
      </NavigationContainer>
    );
  }


export default App;