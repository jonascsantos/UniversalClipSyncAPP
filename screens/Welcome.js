import React from 'react'
import { StatusBar, Animated, Image, Dimensions, Modal, StyleSheet, FlatList } from 'react-native'

import { Text, Block, Button } from '../components'
import { theme } from '../constants'
import navigation from '../navigation';

const { width, height } = Dimensions.get('window');

class Welcome extends React.Component {
    static navigationOptions = { headerShown: false };

    scrollX = new Animated.Value(0);

    state = {
        showTerms: false,
    }

    renderTermsService(){
        return(
            <Modal animationType="slide" visible={this.state.showTerms}>
                <Text>modal</Text>
            </Modal>
        )
    }

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
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        resizeMode="contain"
                        style={{ width, height: height / 2, overflow: 'visible' }}
                    />
                )}
                onScroll={
                    Animated.event([{
                        nativeEvent: {
                            contentOffset: { x: this.scrollX }
                        }
                    }])
                }
            />
        );
    }

    renderSteps() {
        const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);

        return (
            <Block row center middle style={styles.stepsContainer}>
                {illustrations.map((item, index) => {
                    const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Block
                            animated
                            flex={false}
                            color="gray"
                            key={`step-${index}`}
                            style={[styles.steps, { opacity }]}
                        />
                    )
                })}

            </Block>
        );
    }

    render() {
        const { navigation } = this.props;

        return (
            <Block>
                <StatusBar barStyle="dark-content" />
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
                    <Button gradient onPress={() => navigation.navigate('Login')}>
                        <Text center semibold white>Login</Text>
                    </Button>
                    <Button shadow onPress={() => navigation.navigate('Signup')}>
                        <Text center semibold>Signup</Text>
                    </Button>
                    <Button onPress={() => this.setState({ showTerms: true})}>
                        <Text center caption gray>Terms of Service</Text>
                    </Button>
                </Block>
                {this.renderTermsService()}
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
    stepsContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
    },

    steps: {

        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
    },

})

