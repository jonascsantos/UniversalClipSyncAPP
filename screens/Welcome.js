import React from 'react'
import { StatusBar, Animated, Image, Dimensions, Modal, StyleSheet, ScrollView, FlatList } from 'react-native'

import { Text, Block, Button } from '../components'
import { theme } from '../constants'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ThemeColors } from 'react-navigation';

const { width, height } = Dimensions.get('window');

class Welcome extends React.Component {
    static navigationOptions = { headerShown: false };

    scrollX = new Animated.Value(0);

    state = {
        showTerms: false,
    }

    loremIpsumText() {
        return (
            <Text caption gray height={18}>
                Lorem ipsum dolor lorem ipsom dolor met consetur adipsiun elit loren ipsum dolor
                Lorem ipsum dolor lorem ipsom dolor met consetur adipsiun elit loren ipsum dolor
                Lorem ipsum dolor lorem ipsom dolor met consetur adipsiun elit loren ipsum dolor
            </Text>
        )
    }

    renderTermsService() {
        return (
            <Modal animationType="slide" visible={this.state.showTerms}>
                <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
                    <Text h2 light>Terms of Service</Text>
                    <ScrollView style={{ paddingVertical: theme.sizes.padding }}>
                        {this.loremIpsumText()}
                        {this.loremIpsumText()}
                        {this.loremIpsumText()}
                        {this.loremIpsumText()}
                        {this.loremIpsumText()}
                        {this.loremIpsumText()}
                    </ScrollView>
                    <Button gradient onPress={() => this.setState({ showTerms: false })} >
                        <Text center white>I understand</Text>
                    </Button>
                </Block>
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
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => (
                    <Block style={styles.containerImageText} center top>
                        <Image
                            source={item.source}
                            resizeMode="contain"
                            style={{ width: width, height: height / 2, overflow: 'visible' }}
                        />
                        <Block middle center style={styles.container} flex={0.1}>
                            <Text center h1 bold color="white" style={styles.text} >{item.title}</Text>
                            <Text center h2 light color="white" >{item.desc}</Text>
                        </Block>
                    </Block>
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
                            color="white"
                            key={`step-${index}`}
                            style={[styles.steps, { opacity }]}
                        />
                    )
                })}
            </Block>
        );
    }

    bgchangeColor() {
        const stepPosition = Animated.divide(this.scrollX, width);
        const bgColor = stepPosition.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ['rgba(14 ,134, 227, 1)', 'rgba(0,174,211, 1)', 'rgba(3, 188, 132, 1)'],
        });

        return (bgColor);
    }


    render() {
        const { navigation } = this.props;

        return (
            <>
                <StatusBar barStyle="dark-content" />
                <Block animated color={this.bgchangeColor()}>
                    <Block margin={[0, 0]} flex={1} center middle>
                        {this.renderIllustrations()}
                        {this.renderSteps()}
                    </Block>

                    <Block middle flex={0.25} margin={[0, theme.sizes.padding * 2]}>
                        <Button outline color="transparent" onPress={() => navigation.navigate('Login')}>
                            <Text center semibold white>Login</Text>
                        </Button>
                        <Button onPress={() => this.setState({ showTerms: true })}>
                            <Text center caption gray>Terms of Service</Text>
                        </Button>
                    </Block>
                    {this.renderTermsService()}
                </Block>
            </>
        )
    }
}

Welcome.defaultProps = {
    illustrations: [
        { id: 1, source: require('../assets/images/onboarding1.png'), title: "Shared Clipboard", desc: "Easily sync your clipboard with any connected device!" },
        { id: 2, source: require('../assets/images/onboarding2.png'), title: "New Feature: Tap to Sync", desc: "Tap the icon for an instant sync." },
        { id: 3, source: require('../assets/images/onboarding3.png'), title: "Multiplatform Environment", desc: "Available for Android, IOS, Windows, Linux and Mac OS" },
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

    skipButton: {
        alignItems: "flex-end",
        marginTop: 20,
        padding: theme.sizes.padding,
    },
    container: {
        flex: 1,
        width: width
    },

    containerImageText: {
        marginTop: 100
    },

    text: {
        paddingVertical: theme.sizes.padding / 2
    },

    steps: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
    },

})

