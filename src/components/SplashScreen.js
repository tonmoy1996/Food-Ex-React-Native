import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
/*Images*/
import foodLogo from '../assets/images/food_logo.png';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={foodLogo}/>
        </View>
    );
};
const styles       = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
    },
    logo     : {
        width : '70%',
        height: '20%',
        resizeMode:'contain'
    },
});
export default SplashScreen;
