import React from 'react';
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import Signup from '../screens/Signup';
// import Clipboard from '../screens/Clipboard';
// import Recents from '../screens/Recents';
// import Favourites from '../screens/Favourites';
// import Devices from '../screens/Devices';
// import Settings from '../screens/Settings';

import { theme } from '../constants'

const screens = createStackNavigator({
    Welcome,
    Login,
    Signup,
    Forgot,
    // Clipboard,
    // Recents,
    // Favourites,
    // Devices,
    // Settings
},{
    defaultNavigationOptions: {
        headerStyle: {
            height: theme.sizes.base = 4,
            backgroundColor: theme.colors.white,
            borderBottomColor: "transparent",
            elevation: 0,
        },
        headerBackImage:() => <Icon name="left" size={30} color="black" />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: theme.sizes.base * 2,
            paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base,
        },
    }
});

export default createAppContainer(screens);