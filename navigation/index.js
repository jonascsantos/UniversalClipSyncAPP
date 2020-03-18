import React from 'react';
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { createAppContainer, ThemeColors } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import SignUp from '../screens/SignUp';
import Clipboard from '../screens/Clipboard';
// import Recents from '../screens/Recents';
// import Favourites from '../screens/Favourites';
// import Devices from '../screens/Devices';
// import Settings from '../screens/Settings';

import { theme } from '../constants'

const screens = createStackNavigator({
    Welcome,
    Login,
    SignUp,
    Forgot,
    Clipboard,
    // Recents,
    // Favourites,
    // Devices,
    // Settings
},{
    defaultNavigationOptions: {
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
            marginLeft: theme.sizes.base,
            paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base,
        },
    }
});

export default createAppContainer(screens);