import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';

const withoutHeaderOptions = {
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal'
}


const StackNavigator = createStackNavigator();
const MasterRoute = () => {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName="Login">
                <StackNavigator.Screen options={withoutHeaderOptions} name="Login" component={LoginScreen} />
                <StackNavigator.Screen options={withoutHeaderOptions} name="SignUp" component={SignUpScreen} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}
export default MasterRoute;