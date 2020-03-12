import React from 'react';
import { Image } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../screens/Welcome';
// import Login from '../screens/Login';
// import Forgot from '../screens/Forgot';
// import Clipboard from '../screens/Clipboard';
// import Recents from '../screens/Recents';
// import Favourites from '../screens/Favourites';
// import Devices from '../screens/Devices';
// import Settings from '../screens/Settings';

import { theme } from '../constants'

const screens = createStackNavigator({
    Welcome,
    // Login,
    // Forgot,
    // Clipboard,
    // Recents,
    // Favourites,
    // Devices,
    // Settings
},{
    defaultNavigationOptions: {
        headerStyle: {},
        headerBackImage:() => <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
    }
});

export default createAppContainer(screens);