import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import styles from "../App.style";
import Theme from "./theme"

const ThemePage = ({}) => {
    return(
        <View style={themePageStyles.col}>
            <View style={themePageStyles.title}>
                <Text style={styles.h1}>Themes</Text>
            </View>
            <View style={themePageStyles.row}>
                <Theme type={'relaxation'} onPress={''} />
                <Theme type={'mindfullness'} onPress={''} />
            </View>
            <View style={themePageStyles.row}>
                <Theme type={'acceptance'} onPress={''} />
                <Theme type={'sleep'} onPress={''} />
            </View>
            <View style={themePageStyles.row}>
                <Theme type={'self-esteem'} onPress={''} />
                <Theme type={'movement'} onPress={''} />
            </View>
        </View>
    
    )
}

export default ThemePage

const themePageStyles = StyleSheet.create({
    title: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 23,
        marginTop: 30,
        marginBottom: -30
    },
    row: {
        flex:2,
        flexDirection: 'row'
    },
    col: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
});