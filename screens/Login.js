import React, { Component } from 'react'
import { ActivityIndicator, Keyboard, StyleSheet, KeyboardAvoidingView } from 'react-native'

import { Text, Block, Button, Input } from '../components'
import { theme } from '../constants'

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
                <Block color={theme.colors.white} padding={[100, theme.sizes.padding * 2]}>
                    <Text h1 bold> Login </Text>
                    <Block middle>
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
