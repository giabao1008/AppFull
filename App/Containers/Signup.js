import React, {Component} from 'react';
import {  Text,  TextInput,  View,   Image,  TouchableOpacity,  Alert, CheckBox} from 'react-native';
import { Icon } from 'native-base';
import images from  '../Themes/Images';
import SignupStyle from './Styles/SignupStyle'
export default class Signin extends Component {
    _onSignup = () => {
        Alert.alert('Sign up !! ');
    }
    static navigationOptions = {
        navigationOptions: () => ({
            headerLeft: ( <Icon name={'chevron-left'}   /> ),
        }),
    };
    render() {
        return (
            <View style={SignupStyle.container}>
                <View style={SignupStyle.bannerSignup}>
                    <Image source={images.bookSignUp }
                           style={SignupStyle.bannerSignupImage}/>
                    <Text style={SignupStyle.signUpBannerText}>
                        {'Sign up Account'.toUpperCase()}
                    </Text>
                </View>
                <View style={SignupStyle.inputGroup}>
                    <Text style={SignupStyle.label}> {'UserName'.toUpperCase()} </Text>
                    <TextInput
                        style={SignupStyle.input}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={SignupStyle.inputGroup}>
                    <Text style={SignupStyle.label}> {'Password'.toUpperCase()} </Text>
                    <TextInput
                        style={SignupStyle.input}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={SignupStyle.inputGroup}>
                    <Text style={SignupStyle.label}> {'email address'.toUpperCase()} </Text>
                    <TextInput
                        style={SignupStyle.input}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, width: '100%'  }}>
                    <CheckBox style={{ width: 36,height: 48 }}
                    />
                    <Text style={{marginTop: 5, fontSize: 13, }}>
                        By clicking this, you agree to Studies Sorted's Terms of Service and that you have read out
                        <Text style={SignupStyle.termLink} > Privacy Policy </Text>
                    </Text>
                </View>
                <View style={SignupStyle.groupSignUp}>
                    <TouchableOpacity
                        style={SignupStyle.btnSignUp}
                        onPress={this._onSignup}
                    >
                        <Text style={SignupStyle.btnText}>  {'sign up'.toUpperCase()} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
