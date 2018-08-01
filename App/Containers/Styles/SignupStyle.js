import { StyleSheet } from 'react-native'
import ApplicationStyles from "../../Themes/ApplicationStyles";
import colors from '../../Themes/Colors'

const SignupStyle = StyleSheet.create({
    ...ApplicationStyles.screen,
    bannerSignup:{
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        backgroundColor: colors.defaultColor,
        height: 120,
        position: 'relative',
        marginBottom: 10,
    },
    bannerSignupImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 10,
        left: 0,
    },
    signUpBannerText: {
        fontSize: 19,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    termLink: {
        color: colors.defaultColor,
    },
    groupSignUp: {
        marginTop: 30,
    },
    btnSignUp: {
        backgroundColor: colors.defaultColor,
        alignItems: 'center',
        padding: 15,
        borderRadius: 24,
    },
    btnTextCancel: {
        color: colors.defaultColor
    },
    btnText: {
        color: 'white',
        fontSize: 17,
    },


})
export  default SignupStyle;