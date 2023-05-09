import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'

const Theme = ({type, onPress}) => {
    let themeStyle = null;
    let themeTitle = '';
    let nrExcercisses = 0;
    let themeIcon = null;

    switch (type){
        case 'mindfullness':
            ;(themeStyle = styles.mindfullness),
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
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <View style={themeStyle}/>
            <Image style={styles.icon} source={themeIcon}/>
            <Text style={styles.titleText}>{themeTitle}</Text>
            <Text style={styles.excercisseText}>{nrExcercisses} Excercisses</Text>
        </TouchableOpacity>
    )
}

export default Theme

const styles = StyleSheet.create({
    box:{
        width: 100,
        height: 100,
        backgroundColor: '#F6F6F4'
    },
    icon: {

    },
    titleText: {

    },
    excercisseText: {

    },
    mindfullness: {
        width:0,
        height:0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 100,
        borderTopWidth: 100,
        borderRightColor: "transparent",
        borderTopColor: "#C6E6F9",
        transform:[{rotate: "90deg"}]
    },


})