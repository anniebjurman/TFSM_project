import { StyleSheet, View } from 'react-native';

export default function Honeycomb() {
    return (
        <>
            <View style={[styles.honeycombDefault, styles.honeycombTop]}></View>
            <View style={[styles.honeycombDefault, styles.honeycombMiddle]}>hej</View>
            <View style={[styles.honeycombDefault, styles.honeycombBottom]}></View>
        </>
    );
}

const styles = StyleSheet.create({
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