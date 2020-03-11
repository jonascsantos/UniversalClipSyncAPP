import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';

import Navigation from './navigation'
import { Block } from './components'

//import used images
const images = [
  require('../assets/images/logo.png'),
  require('../assets/images/onboarding1.png'),
  require('../assets/images/onboarding2.png'),
  require('../assets/images/onboarding3.png'),
  require('../assets/images/phone.png'),
  require('../assets/images/desktop.png'),
  require('../assets/images/avatar.png'),
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
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    <View style={styles.container}>
      <Navigation />
    </View>
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
