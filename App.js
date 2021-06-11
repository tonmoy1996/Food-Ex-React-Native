import React, {useState, useEffect} from 'react';
import {
    StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';

import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import SplashScreen from './src/components/SplashScreen';
import MasterRoute from './src/route/MasterRoute';

const App = () => {
    const [viewTimeout, setViewTimeout] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setViewTimeout(true);
        }, 1000);
    }, []);
    return (
        <>
            {viewTimeout ? <MasterRoute /> : <SplashScreen />}
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
