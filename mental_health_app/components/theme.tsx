import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import styles from "../App.style";

const Theme = ({type, onPress}) => {
    let themeStyle = null;
    let themeTitle = '';
    let nrExcercisses = 0;
    let themeIcon = null;

    switch (type){
        case 'mindfullness':
            ;(themeStyle = themeStyles.mindfullness),
            (themeTitle = 'Mindfullness'),
            (nrExcercisses = 25),
            (themeIcon = require('../assets/mindfullness.png'))
            break
        case 'relaxation':
            break
        case 'sleep':
            break
        case 'self-esteem':
            break
        case 'accaptance':
            break
        case 'movement':
            break
    }

    return(
        <TouchableOpacity style={themeStyles.box} onPress={onPress}>
            <View style={[themeStyle, themeStyles.shadow]}/>
            <Image style={themeStyles.icon} source={themeIcon}/>
            <Text style={styles.h3}>{themeTitle}</Text>
            <Text style={styles.p}>{nrExcercisses} Excercisses</Text>
        </TouchableOpacity>
    )
}

export default Theme

const themeStyles = StyleSheet.create({
    box:{
        width: 173,
        height: 173,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 71,
        height: 59,
        marginTop: -120,
        marginBottom: 10
    },
    shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: 4, height:0},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    mindfullness: {
        width:0,
        height:0,
        backgroundColor: "#F6F6F4",
        borderStyle: "solid",
        borderRightWidth: 173,
        borderTopWidth: 173,
        borderRightColor: "#F6F6F4",
        borderTopColor: "#C6E6F9",
        transform:[{rotate: "90deg"}]
    },


})