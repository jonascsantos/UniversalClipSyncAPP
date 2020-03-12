import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import Navigation from './navigation'
import { Block } from './components'

//import used images
const images = [
  require('./assets/icons/logo.png'),
  require('./assets/icons/phone.png'),
  require('./assets/icons/desktop.png'),
  require('./assets/icons/google.png'),
  require('./assets/icons/facebook.png'),
  require('./assets/icons/apple.png'),
  require('./assets/icons/email.png'),
  require('./assets/icons/anonymous.png'),
  require('./assets/images/avatar.jpeg'),
  require('./assets/images/onboarding1-notebook.png'),
  require('./assets/images/onboarding1-tablet.png'),
  require('./assets/images/onboarding1-phone.png'),
  require('./assets/images/onboarding2.png'),
  require('./assets/images/onboarding3.png'),
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => {

    //caching images for better performance
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    )

  };
}

const styles = StyleSheet.create({

});
