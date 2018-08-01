import React, {Component} from 'react';
import {  Text, TextInput,  View, Image,  TouchableOpacity} from 'react-native';
import {  StackNavigator, } from 'react-navigation';
import SigninStyle from './Styles/SigninStyle'
import Signup from './Signup';
import create from '../Services/Api';
import images from '../Themes/Images';

export default class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
        }
    }
    _onSignup = () => {
        fetch(create.apiLogin,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.emailAddress,
                password: this.state.password,
            }),
        })
            .then( (response) => response.json())
            .then((res) => {
                if (res.success == true) {
                    console.log(res.message)
                }
                else{
                    console.log(res.message)
                }
            } ).done()
    }
    render() {
        const  navigate  =this.props.navigation.navigate;
        return (
            <View style={SigninStyle.container}>
                <View style={SigninStyle.logo}>
                    <Image source={ images.logo }
                           style={SigninStyle.logoImage}/>
                </View>
                <View style={SigninStyle.inputGroup}>
                    <Text style={SigninStyle.label}> {'Email adress'.toUpperCase()} </Text>
                    <TextInput
                        style={SigninStyle.input}
                        onChangeText={(emailAddress) => this.setState({emailAddress})}
                    />
                </View>
                <View style={SigninStyle.inputGroup}>
                    <Text style={SigninStyle.label}> {'Password'.toUpperCase()} </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={SigninStyle.input}
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <Text style={SigninStyle.forgotLink}
                      onPress={() =>
                          navigate('Forgot')
                      }>
                    {'Forgot'.toUpperCase()}
                </Text>
                <View style={SigninStyle.btnGroup}>
                    <TouchableOpacity
                        style={SigninStyle.btnDefault}
                        onPress={this._onSignup}
                    >
                        <Text style={SigninStyle.btnText}> {'sign in'.toUpperCase()} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={SigninStyle.btnFace}
                        onPress={this._onPress}
                    >
                        <Text style={SigninStyle.btnText}>  {'sign in with facebook'.toUpperCase()} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={SigninStyle.btnGoogle}
                         onPress={this._onPress}
                    >
                        <Text style={SigninStyle.btnText}>  {'sign in with google'.toUpperCase()} </Text>
                    </TouchableOpacity>
                </View>
                <Text style={SigninStyle.signin}>
                    {' dont have an account? '.toUpperCase()}
                    <Text style={SigninStyle.signinLink}
                          onPress={() =>  navigate('Signup')
                          }
                            >
                        {' sign up now'.toUpperCase()}
                    </Text>
                </Text>
            </View>
        )
    }

}
