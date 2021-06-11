import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const AppTextInput = ({icon, ...otherProps}) => {
    return (
            <View style={styles.textGroup}>
                <Ionicons style={styles.icon} name={icon} />
                <TextInput {...otherProps} style={styles.textInput} />
            </View>
    );
};
const styles       = StyleSheet.create({
    textGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'white',
        backgroundColor: 'white',
        elevation: 3,
        paddingVertical: hp('0.3%'),
        paddingHorizontal: wp('3%'),
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: hp('0%'),
        marginHorizontal: wp('0%'),
        marginVertical: hp('1%')
    },
    icon     : {
        marginRight: 10,
        fontSize:24,
        color: 'black'
    },
    textInput: {
        fontSize: 20,
    },
    
});
export default AppTextInput;
