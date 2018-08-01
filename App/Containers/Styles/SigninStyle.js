import { StyleSheet } from 'react-native'
import ApplicationStyles from "../../Themes/ApplicationStyles";
import colors from '../../Themes/Colors'

const SigninStyle = StyleSheet.create({
    ...ApplicationStyles.screen,
    signin: {
        color: '#aaa',
        textAlign: 'center',
        fontSize: 15,
    },
    signinLink: {
        color: colors.defaultColor,
    },
    btnText: {
        color: 'white',
        fontSize: 17,
    },
})
export  default SigninStyle;