import React from 'react'
import { Image, Dimensions, StyleSheet, FlatList } from 'react-native'

import { Text, Block, Button } from '../components'
import { theme } from '../constants'

const { width, height } = Dimensions.get('window');

class Welcome extends React.Component {
    static navigationOptions = { headerShown: false };

    renderIllustrations() {
        const { illustrations } = this.props;

        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={illustrations}
                extraData={this.state}
                keyExtractor={(item, index) => '${item.id}'}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        resizeMode="contain"
                        style={{width, height: height / 2, overflow: 'visible'}}
                    />
                )}
            />
        );
    }
    renderSteps() {
        return (
            <Block>
                <Text>* * *</Text>
            </Block>
        );
    }

    render() {
        return (
            <Block>
                <Block center middle flex={0.5}>
                    <Text h1 center bold>
                        Your home.
                        <Text h1 primary> Greener </Text>
                    </Text>
                    <Text h3 gray2 center style={{ marginTop: theme.sizes.padding / 2 }}>
                        Enjoy the experience.
                    </Text>
                </Block>
                <Block center middle>
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button gradient onPress={() => { }}>
                        <Text center semibold>Login</Text>
                    </Button>
                    <Button shadow onPress={() => { }}>
                        <Text center semibold>Signup</Text>
                    </Button>
                    <Button onPress={() => { }}>
                        <Text center caption gray>Terms of Service</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

Welcome.defaultProps = {
    illustrations: [
        { id: 1, source: require('../assets/images/onboarding1-tablet.png') },
        { id: 2, source: require('../assets/images/onboarding2.png') },
        { id: 3, source: require('../assets/images/onboarding3.png') },
    ]
}

export default Welcome;

const styles = StyleSheet.create({

})

