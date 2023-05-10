import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import styles from "../App.style";

const Theme = ({type, onPress}) => {
    let themeStyle = null;
    let iconStyle = null;
    let themeTitle = '';
    let nrExcercisses = 0;
    let themeIcon = null;

    switch (type){
        case 'mindfullness':
            ;(themeStyle = themeStyles.mindfullness),
            (iconStyle = themeStyles.mindfullnessIcon),
            (themeTitle = 'Mindfullness'),
            (nrExcercisses = 25),
            (themeIcon = require('../assets/mindfullness.png'))
            break
        case 'relaxation':
            ;(themeStyle = themeStyles.relaxation),
            (iconStyle = themeStyles.relaxationIcon),
            (themeTitle = 'Relaxation'),
            (nrExcercisses = 15),
            (themeIcon = require('../assets/relaxation.png'))
            break
        case 'sleep':
            ;(themeStyle = themeStyles.sleep),
            (iconStyle = themeStyles.sleepIcon),
            (themeTitle = 'Sleep'),
            (nrExcercisses = 10),
            (themeIcon = require('../assets/sleep.png'))
            break
        case 'self-esteem':
            ;(themeStyle = themeStyles.selfEsteem),
            (iconStyle = themeStyles.selfEsteemIcon),
            (themeTitle = 'Self esteem'),
            (nrExcercisses = 35),
            (themeIcon = require('../assets/self-esteem.png'))
            break
        case 'acceptance':
            ;(themeStyle = themeStyles.acceptance),
            (iconStyle = themeStyles.acceptanceIcon),
            (themeTitle = 'Acceptance'),
            (nrExcercisses = 20),
            (themeIcon = require('../assets/accaptance.png'))
            break
        case 'movement':

            break
    }

    return(
        <TouchableOpacity style={themeStyles.box} onPress={onPress}>
            <View style={[themeStyle, themeStyles.shadow]}/>
            <Image style={iconStyle} source={themeIcon}/>
            <View style={themeStyles.textBox}>
            <Text style={styles.h3}>{themeTitle}</Text>
            <Text style={styles.p}>{nrExcercisses} Excercisses</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Theme

const themeStyles = StyleSheet.create({
    box:{
        width: 173,
        height: 173,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7
    },
    shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: 4, height:0},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    textBox: {
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
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
    mindfullnessIcon: {
        width: 71,
        height: 59,
        marginTop: -120,
        marginBottom: 10
    },
    relaxation: {
        width:0,
        height:0,
        backgroundColor: "#F6F6F4",
        borderStyle: "solid",
        borderRightWidth: 173,
        borderTopWidth: 173,
        borderRightColor: "#F6F6F4",
        borderTopColor: "#F5EAE0",
        transform:[{rotate: "90deg"}]
    },
    relaxationIcon: {
        width: 61,
        height: 66,
        marginTop: -128,
        marginBottom: 10
    },
    sleep: {
        width:0,
        height:0,
        backgroundColor: "#F6F6F4",
        borderStyle: "solid",
        borderRightWidth: 173,
        borderTopWidth: 173,
        borderRightColor: "#F6F6F4",
        borderTopColor: "#E5DEF8",
        transform:[{rotate: "90deg"}]
    },
    sleepIcon: {
        width: 53,
        height: 68,
        marginTop: -128,
        marginBottom: 10
    },
    selfEsteem: {
        width:0,
        height:0,
        backgroundColor: "#F6F6F4",
        borderStyle: "solid",
        borderRightWidth: 173,
        borderTopWidth: 173,
        borderRightColor: "#F6F6F4",
        borderTopColor: "#F4E2F4",
        transform:[{rotate: "90deg"}]
    },
    selfEsteemIcon: {
        width: 68,
        height: 71,
        marginTop: -123,
        marginLeft: 10,
        marginBottom: 3
    },
    acceptance: {
        width:0,
        height:0,
        backgroundColor: "#F6F6F4",
        borderStyle: "solid",
        borderRightWidth: 173,
        borderTopWidth: 173,
        borderRightColor: "#F6F6F4",
        borderTopColor: "#E1F4F1",
        transform:[{rotate: "90deg"}]
    },
    acceptanceIcon: {
        width: 68,
        height: 63,
        marginTop: -115,
        marginBottom: 3
    },

})