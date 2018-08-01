import {
    StackNavigator,
    SwitchNavigator,
} from 'react-navigation'

import Signup from '../Containers/Signup'
import Signin from '../Containers/Signin'
import Forgot from '../Containers/Forgot'
import Browser from '../Containers/Browser'

const AppStack = StackNavigator({ Browser : Browser});
const AuthStack = StackNavigator({
    Signin: {
        screen: Signin,
        navigationOptions: () => ({
            header: null,
        }),
    },
    Signup: {
        screen: Signup,
        navigationOptions: () => ({
            headerTitle: 'Back',
            headerTitleStyle: {
                paddingLeft: 25,
            },
            headerStyle: {
                backgroundColor: '#fff',
                shadowColor: 'transparent',
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
                elevation: 0,
                shadowOpacity: 0
            }
        }),
    },
    Forgot: {
        screen: Forgot,
        navigationOptions: () => ({
            header: null,
        }),
    }
})
export default SwitchNavigator (
    {
        AuthLoading: Signin,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        // initialRouteName: 'AuthLoading',
    }
);
