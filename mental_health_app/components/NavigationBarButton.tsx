import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NavigationBarButton = (props) => {
    const {children, accessibilityState, onPress, name} = props;

    if(accessibilityState.selected){
        return(
            <View style={NavigationBarButtonStyle.btnWrapper}>
                <TouchableOpacity activeOpacity={1} onPress={onPress} style={NavigationBarButtonStyle.active}>
                    <View>{children}</View>
                </TouchableOpacity>
            </View>
        );
    } else {
        return(
            <View style={NavigationBarButtonStyle.btnWrapper}>
                <TouchableOpacity activeOpacity={1} onPress={onPress} style={NavigationBarButtonStyle.inactive}>
                    <View>{children}</View>
                </TouchableOpacity>
            </View>
        );
    }

    
};

export default NavigationBarButton;

const NavigationBarButtonStyle = StyleSheet.create({
    btnWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    active:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inactive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});