import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions } from 'react-native'
import styles from "../App.style";
import HeaderWave from "./HeaderWave";

const Header = () => {

    return(
        <TouchableOpacity>
            <View>
                <HeaderWave customStyles={headerStyles.svgCurve}/>
                <Text style={[styles.h3, headerStyles.text]}>funnybanana24</Text>
                <Image source={require('..assets/profilePic.png')}/>
                <Image source={require('..assets/progressBar.png')}/>
                <Text style={[styles.fontSpecial, headerStyles.text]}>Level 3</Text>
                
            </View>

        </TouchableOpacity>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    headerContainer: {
    },
    text: {
        color: '#F6F6F4'
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    }
});