import React, { Component } from 'react'
import { Dimensions, ActivityIndicator, Image, Keyboard, StyleSheet, KeyboardAvoidingView } from 'react-native'

import { Text, Block, Button, Input } from '../components'
import { theme, images } from '../constants'

const { width, height } = Dimensions.get('window');

const VALID_EMAIL = 'contact@teste.com';
const VALID_PASSWORD = 'subscribe';



export default class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: [],
        loading: false,
    }

    handleLogin() {
        const { navigation } = this.props;
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
                navigation.navigate("Clipboard");
            }
        }, 2000);

    }

    static navigationOptions = { headerShown: false };
    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.login}>
                <Block color={theme.colors.white} bottom padding={[100, theme.sizes.padding * 2]}>
                    <Block bottom>
                        <Block flex={false} center>

                            <Image
                                source={images.logo.source}
                                resizeMode="contain"
                                style={{ width: width, height: height / 5, overflow: 'visible' }}
                            />
                            <Block bottom row center margin={[30, 0]}>
                                <Text color={theme.colors.primary} h1 bold style={{ marginRight: 2 }}>Universal</Text>
                                <Text color={theme.colors.gray} h1 >Clip</Text>
                                <Text color={theme.colors.gray} italic bottom h1 >Sync</Text>
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
                        <Button gradient onPress={() => { this.handleLogin() }}>
                            {loading ? <ActivityIndicator size="small" color="white" /> :
                                <Text bold white center>Login</Text>
                            }
                        </Button>
                        <Button onPress={() => navigation.navigate('Forgot')}>
                            <Text caption gray center style={{ textDecorationLine: 'underline' }}>
                                Forgot your password?
                            </Text>
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

    login: {
        flex: 1,
        justifyContent: "center"
    },

    hasErrors: {
        borderBottomColor: theme.colors.accent,
    }


})
