import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
// import Favourites from '../screens/Favourites';
// import Devices from '../screens/Devices';
// import Settings from '../screens/Settings';

import { theme } from '../constants'

const Stack = createStackNavigator();

function Screens() {
    return(
        <Stack.Navigator
            initialRouteName="Welcome"
            //headerMode="screen"
            screenOptions={{
                headerStyle: {
                    height: theme.sizes.base * 6,
                    backgroundColor: theme.colors.white,
                    borderBottomColor: "transparent",
                    elevation: 0,
                },
                headerBackImage:() => <Icon name="arrowleft" size={30} color={theme.colors.gray3} />,
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
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen 
                name="Forgot"
                component={Forgot}
                options={{
                    title: '' 
                }}
            />
            <Stack.Screen 
                name="SignUp"
                component={SignUp}
                options={{
                    title: '' 
                }}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
                
            />

        </Stack.Navigator>
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