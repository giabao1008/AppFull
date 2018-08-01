import { StyleSheet } from 'react-native'
import ApplicationStyles from "../../Themes/ApplicationStyles";
import colors from '../../Themes/Colors'


const ForgotStyle = StyleSheet.create({
    ...ApplicationStyles.screen,
    bannerForgot: {
        width: '100%',
        height: 260,
        position: 'relative',
    },
    bannerForgotImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    forgotImg: {
        width: 70,
        height: 95,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [
            {
                translateX: -45,
            },
            {
                translateY: -45
            }],
    },
    forgotHeaderTitle: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 50,
        paddingRight: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentForgotPw: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    btnGroupForgot: {
        marginBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
    },
    btnResetPw: {
        backgroundColor: colors.defaultColor,
        alignItems: 'center',
        padding: 15,
        borderRadius: 24,
    },
    btnCancel: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 24,
    },
    btnText: {
        color: 'white',
        fontSize: 17,
    },

})
export default  ForgotStyle ;