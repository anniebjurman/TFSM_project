import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NavigationBarButton = (props, image) => {
    const {children, accessibilityState, onPress, name} = props;
    let iconPath = '';
    let style = null;

    if(accessibilityState.selected){
        return(
            <View style={NavigationBarButtonStyle.btnWrapper}>
                <TouchableOpacity onPress={onPress} style={NavigationBarButtonStyle.active}>
                    <Text>{children}</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return(
            <View style={NavigationBarButtonStyle.btnWrapper}>
                <TouchableOpacity onPress={onPress} style={NavigationBarButtonStyle.inactive}>
                    <Text>{children}</Text>
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
        alignItems: 'center'
    },
    inactive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});