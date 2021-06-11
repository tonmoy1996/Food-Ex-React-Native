import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView,Pressable } from 'react-native';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AppTextInput from './shared-components/AppTextInput';
/* Images */
import foodLogo from '../assets/images/food_logo.png';
import fb from '../assets/images/fb.png';
import gmail from '../assets/images/gmail.png';

/* Styles */
import globalStyle from '../style/globalStyle';

const SignUpScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={globalStyle.container}>
                <View style={styles.logoArea}>
                    <Image source={foodLogo} style={styles.logo} />
                </View>
                <View style={styles.inputViewArea}>
                    <AppTextInput icon='mail' placeholder="E-mail" />
                    <AppTextInput icon='lock-open-outline' placeholder="Password" />
                    <Text style={styles.forgetPasswordText}>Forget Password</Text>
                </View>
                <View style={styles.signInViewArea}>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.connectTextArea}>
                    <Text style={styles.connectText}>Or Connect with</Text>
                </View>
                <View style={styles.socialMediaArea}>
                    <View style={styles.circleIconArea}>
                    <Image source={fb} style={styles.fbStyle} />
                    </View>
                    <View style={styles.circleIconArea}>
                    <Image source={gmail} style={styles.gmailStyle} />
                    </View>
                </View>
                <View style={styles.haveAccountArea}>
                    <Text style={styles.haveAccountText}>Already have an account?</Text>
                    <Pressable onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.signUpText}>SIGN IN</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    logoArea: {
        paddingVertical: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: wp('70%'),
        height: hp('20%'),
        resizeMode: 'contain'
    },
    inputViewArea: {
        paddingTop: hp('2%')
    },
    forgetPasswordText: {
        fontSize: 14,
        textAlign: 'right',
        color: '#000'
    },
    signInViewArea: {
        flexDirection: 'row',
        paddingTop: hp('2%')
    },
    signInButton: {
        width: wp('90%'),
        backgroundColor: '#D2181B',
        borderRadius: 8,
        paddingVertical: hp('2%')
    },
    signInText: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '700'
    },
    connectTextArea: {
        paddingTop: hp('6%')
    },
    connectText: {
        color: '#555555',
        textAlign: 'center',
        fontSize: 16
    },
    socialMediaArea: {
        paddingTop: hp('8%'),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fbStyle: {
        width: 200,
        height: 200,
    },
    gmailStyle: {
        width: 200,
        height: 200
    },
    haveAccountArea:{
        paddingTop: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    haveAccountText: {
        color: '#6D6D6D',
        fontSize: 16
    },
    signUpText:{
        color: '#6D6D6D',
        fontSize: 16,
        paddingLeft: wp('1%'),
    },
    circleIconArea: {
        width: 50,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('2%')
    }

});
export default SignUpScreen;
