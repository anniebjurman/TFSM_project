import { StyleSheet, View, Text } from 'react-native';
import styles from '../App.style';

export default function Honeycomb() {
    return (
        <>
            <View style={[styles2.honeycombDefault, styles2.honeycombTop]}></View>
            <View style={[styles2.honeycombDefault, styles2.honeycombMiddle]}>
                <Text style={styles.h1}>Title</Text>
                <Text style={styles.p}>10 min</Text>
            </View>
            <View style={[styles2.honeycombDefault, styles2.honeycombBottom]}></View>
        </>
    );
}

const styles2 = StyleSheet.create({
    honeycombDefault: {
        width: 0,
        borderColor: 'green',
    },
    honeycombTop: {
        borderTopStyle: 'none',
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderLeftWidth: 52,
        borderRightColor: 'transparent',
        borderRightWidth: 52,
    },
    honeycombBottom: {
        borderBottomStyle: 'none',
        borderTopWidth: 30,
        borderLeftColor: 'transparent',
        borderLeftWidth: 52,
        borderRightColor: 'transparent',
        borderRightWidth: 52,
    },
    honeycombMiddle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 104,
        height: 60,
        backgroundColor: 'green'
    }
});