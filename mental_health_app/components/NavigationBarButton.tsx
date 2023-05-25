import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const NavigationBarButton = (props) => {
    const {children, accessibilityState, onPress} = props;

    if(accessibilityState.selected){
        return(
            <TouchableOpacity onPress={onPress} style={NavigationBarButtonStyle.active}>
                <Text>{children}</Text>
            </TouchableOpacity>
        );
    } else {
        return(
            <TouchableOpacity onPress={onPress} style={NavigationBarButtonStyle.inactive}>
                <Text>{children}</Text>
            </TouchableOpacity>
        );
    }

    
};

export default NavigationBarButton;

const NavigationBarButtonStyle = StyleSheet.create({
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