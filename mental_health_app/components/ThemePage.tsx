import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import styles from "../App.style";
import Theme from "./theme";
import Header from "./Header"

const ThemePage = ({navigation}) => {
    return(
        <View style={themePageStyles.col}>
            <Header/>
            <View style={themePageStyles.title}>
                <Text style={styles.h1}>Themes</Text>
            </View>
            <View style={themePageStyles.row}>
                <Theme type={'relaxation'} onPress={()=>navigation.navigate('Relaxation')} />
                <Theme type={'mindfullness'} onPress={()=>navigation.navigate('Mindfulness')} />
            </View>
            <View style={themePageStyles.row}>
                <Theme type={'acceptance'} onPress={()=>navigation.navigate('Acceptance')} />
                <Theme type={'sleep'} onPress={()=>navigation.navigate('Sleep')} />
            </View>
            <View style={themePageStyles.row}>
                <Theme type={'self-esteem'} onPress={()=>navigation.navigate('Self-esteem')} />
                <Theme type={'movement'} onPress={()=>navigation.navigate('Movement')} />
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
        marginTop: 0,
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