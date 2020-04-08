import React, { Component } from 'react'
import { Alert, StyleSheet, KeyboardAvoidingView, ActivityIndicator, Keyboard } from 'react-native'

import { Text, Block, Button, Input } from '../components';
import { theme } from '../constants'
import { AuthContext } from '../navigation/context'


export default class SignUp extends Component {
    static contextType = AuthContext;

    state = {
        email: null,
        username: null,
        password: null,
        errors: [],
        loading: false,
    }

    handleSignUp() {
        const { navigation } = this.props;
        const { email, username, password } = this.state;
        const errors = [];

        Keyboard.dismiss();
        
        this.setState({ loading: true });

        if (!email) errors.push('email');
        if (!username) errors.push('username');
        if (!password) errors.push('password');

        this.setState({ errors, loading: false });

        if (!errors.length) {
            Alert.alert(
                'Success!',
                'Your account has been created',
                [
                    {
                        text: 'Continue', onPress: () => {
                            this.context.signUp();
                        }

                    }
                ],
                { cancelable: false }
            )
        }
    }

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.signup}>
                <Block color="white" padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold>Sign Up</Text>
                    <Block middle >
                        <Input
                            email
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        />
                        <Input
                            label="Username"
                            error={hasErrors('username')}
                            style={[styles.input, hasErrors('username')]}
                            defaultValue={this.state.username}
                            onChangeText={text => this.setState({ username: text })}
                        />
                        <Input
                            secure
                            label="Password"
                            error={hasErrors('password')}
                            style={[styles.input, hasErrors('password')]}
                            defaultValue={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                        />

                        <Button gradient onPress={() => { this.handleSignUp() }}>
                            {loading ? <ActivityIndicator size="small" color="white" /> :
                                <Text bold white center>Sign Up</Text>
                            }
                        </Button>
                        <Button onPress={() => navigation.navigate('Login')}>
                            <Text caption gray center style={{ textDecorationLine: 'underline' }}>
                                Back to Login
                            </Text>
                        </Button>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    signup: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent,
    }
})

