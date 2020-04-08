import React, { Component } from 'react'
import { StatusBar, Dimensions, View, ActivityIndicator, Image, Keyboard, StyleSheet, KeyboardAvoidingView } from 'react-native'

import { Text, Block, Button, Input } from '../components'
import { theme, images } from '../constants'

import { AuthContext } from '../navigation/context'

const { width, height } = Dimensions.get('window');

const VALID_EMAIL = 'contact@ehoq.com';
const VALID_PASSWORD = 'subscribe';



export default class Login extends Component {
    static contextType = AuthContext;

    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: [],
        loading: false,
    }

    handleLogin() {
        const { email, password } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        setTimeout(() => {
            if (email !== VALID_EMAIL) {
                errors.push('email');
            }

            if (password !== VALID_PASSWORD) {
                errors.push('password')
            }

            this.setState({ errors, loading: false });


            if (!errors.length) {
                this.context.signIn();
            }
        }, 1000);

    }

    static navigationOptions = { headerShown: false };
    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
        let signContext = this.context;


        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setBackgroundColor("rgba(0,0,0,0)", true)

        return (
            <KeyboardAvoidingView behavior="height" style={styles.login}>
                <Block color={theme.colors.white} bottom padding={[100, theme.sizes.base * 2]}>
                    <Block middle>
                        <Block flex={false} center>
                            <Image
                                source={images.logos.app}
                                resizeMode="contain"
                                style={{ width: width, height: height / 5, overflow: 'visible' }}
                            />
                            <Block bottom row center margin={[15, 0, 20, 0]}>
                                <Text color={theme.colors.primary} h1 bold style={{ paddingBottom: 5, marginRight: 2 }}>Universal</Text>
                                <Text color={theme.colors.gray4} h2 medium >Clip</Text>
                                <Text color={theme.colors.gray4} italic medium bottom h2 >Sync</Text>
                            </Block>
                        </Block>

                        <Input
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        />
                        <Input
                            secure
                            label="Password"
                            error={hasErrors('password')}
                            style={[styles.input, hasErrors('password')]}
                            defaultValue={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                        />
                        <Button style={styles.forgot} onPress={() => navigation.navigate('Forgot')}>
                            <Text caption gray center style={{ textDecorationLine: 'underline' }}>
                                Forgot your password?
                            </Text>
                        </Button>

                        <Button gradient onPress={() => { this.handleLogin() }}>
                            {loading ? <ActivityIndicator size="small" color="white" /> :
                                <Text bold white center>Continue</Text>
                            }
                        </Button>

                        <Button style={styles.forgot} onPress={() => navigation.navigate('SignUp')}>
                            <Text caption gray center style={{ textDecorationLine: 'underline' }}>
                                Don't have an Account ? SIGN UP
                            </Text>
                        </Button>

                        <Block center row middle margin={[10, 0]}>
                            <View style={styles.hairline} />
                            <Text bold caption gray4>  OR  </Text>
                            <View style={styles.hairline} />
                        </Block>

                        <Button style={styles.socialButton} color="#FFFFFF">
                            <Block middle center row>
                                <Image
                                    source={images.logos.google}
                                    resizeMode="contain"
                                    style={{ width: theme.sizes.base, marginHorizontal: 10, overflow: 'visible' }}
                                />
                                <Text caption center>
                                    Continue with Google
                                </Text>
                            </Block>
                        </Button>

                        <Button style={styles.socialButton} color="#3b5998">
                            <Block middle center row>
                                <Image
                                    source={images.logos.facebook}
                                    resizeMode="contain"
                                    style={{ width: theme.sizes.base, marginHorizontal: 10, overflow: 'visible' }}
                                />
                                <Text caption center white>
                                    Continue with Facebook
                                </Text>
                            </Block>
                        </Button>

                        <Button style={styles.socialButton} color="#000000">
                            <Block middle row center>
                                <Image
                                    source={images.logos.apple}
                                    resizeMode="contain"
                                    style={{ width: theme.sizes.base, marginHorizontal: 10, overflow: 'visible' }}
                                />
                                <Text caption white>
                                    Continue with Apple
                                </Text>
                            </Block>
                        </Button>

                        <Block flex={1} />
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    hairline: {
        backgroundColor: theme.colors.gray4,
        height: 1,
        width: 100
    },

    socialButton: {
        borderWidth: 0.1,
        borderRadius: 30,
        elevation: 1
    },

    forgot: {
        marginVertical: 0,
        paddingVertical: 0,
    },

    login: {
        flex: 1,
        justifyContent: "center"
    },

    hasErrors: {
        borderBottomColor: theme.colors.accent,
    }


})
