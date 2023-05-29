import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions } from 'react-native'
import styles from "../App.style";
import HeaderWave from "./HeaderWave";

const Header = () => {
    return(
        <TouchableOpacity>
            <View style={headerStyles.headerContainer}>
                <HeaderWave customStyles={headerStyles.svgCurve}/>
                <View style={headerStyles.row}>
                    <View style={{flex: 2}}/>
                    <View style={{flex:2, marginTop: 35, marginLeft:50}}>
                        <Text style={[styles.h3, headerStyles.text]}>funnybanana24</Text>
                    </View>
                    <View style={{flex: 1}}> 
                        <View style={headerStyles.col}>
                            <Image style={{height: 41, width: 41, marginTop: 18, marginLeft:5}} source={require('../assets/profilePic.png')}/>
                            <Image style={{height: 5, width: 44, marginTop: 4,  marginLeft:5}} source={require('../assets/progressBar.png')}/>
                            <Text style={[styles.fontSpecial, headerStyles.text, { marginLeft:5}]}>Level 3</Text>
                        </View>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    headerContainer: {
        height: 104,
        width: Dimensions.get('window').width,
        marginBottom: -15
    },
    row: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    col: {
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        color: '#F6F6F4'
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    }
});