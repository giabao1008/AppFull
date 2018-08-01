import React, {Component} from 'react';
import {  Container,   Content,  Text} from 'native-base';
import {  createStackNavigator,} from 'react-navigation';
import {  Alert,  Image,  View,   TextInput,  TouchableOpacity} from "react-native";
import images from '../Themes/Images'
import  ForgotStyle from './Styles/ForgotStyle'
export default class Signin extends Component {
    _onFogot = () => {
        Alert.alert('Forgot ');
    }
    _onCancel= ()=> {
        Alert.alert('Cancel ');
    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            <Container>
                <View style={ForgotStyle.bannerForgot}>
                    <Image source={images.backgroundForget}
                           style={ForgotStyle.bannerForgotImg}/>
                    <Image source={ images.lockIcon }
                           style={ForgotStyle.forgotImg}/>
                </View>
                <View style={ForgotStyle.forgotHeaderTitle}>
                    <Text style={ForgotStyle.title}>
                        {'Forget Password'.toUpperCase()}
                    </Text>
                    <Text style={ForgotStyle.text}>
                        Please enter your email address below and we will send you instructions on how to reset it
                    </Text>
                </View>
                <Content style={ForgotStyle.contentForgotPw}>
                    <Text style={ForgotStyle.label}> {'Email address'.toUpperCase()} </Text>
                    <TextInput
                        style={ForgotStyle.input}
                        onChangeText={(text) => this.setState({text})}
                    />
                </Content>
                <View style={ForgotStyle.btnGroupForgot}>
                    <TouchableOpacity
                        style={ForgotStyle.btnResetPw}
                        onPress={this._onFogot}
                    >
                        <Text style={ForgotStyle.btnText}>  {'Submit'.toUpperCase()} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ForgotStyle.btnCancel}
                        onPress={() =>
                            navigate('Signin')
                        }
                    >
                        <Text style={ForgotStyle.btnTextCancel}>  {'Cancel'.toUpperCase()} </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

}