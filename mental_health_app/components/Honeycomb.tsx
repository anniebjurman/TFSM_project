import { StyleSheet, View, Text } from 'react-native';
import styles from '../App.style';
// import Svg, { Circle, Rect } from 'react-native-svg';

export default function Honeycomb(props: any) {
    const isFav = props.isFavorite;

    return (
        <View>
            <View style={[styles2.honeycombDefault, styles2.honeycombTop]}></View>
            <View style={[styles2.honeycombDefault, styles2.honeycombMiddle]}>
                {isFav ? (
                    <></>
                ) : <></>}
                <Text style={styles.h1}>Title</Text>
                <Text style={styles.p}>10 min</Text>
            </View>
            <View style={[styles2.honeycombDefault, styles2.honeycombBottom]}></View>
        </View>
    );
}

const styles2 = StyleSheet.create({
    honeycombDefault: {
        width: 0,
        borderColor: '#E1F4E6',
    },
    honeycombTop: {
        borderTopStyle: 'none',
        borderBottomWidth: 40,
        borderLeftColor: 'transparent',
        borderLeftWidth: 72,
        borderRightColor: 'transparent',
        borderRightWidth: 72,
    },
    honeycombBottom: {
        borderBottomStyle: 'none',
        borderTopWidth: 40,
        borderLeftColor: 'transparent',
        borderLeftWidth: 72,
        borderRightColor: 'transparent',
        borderRightWidth: 72,
    },
    honeycombMiddle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 144,
        height: 85,
        backgroundColor: '#E1F4E6'
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    tmp: {
        backgroundColor: '#E1F4E6'
    }
});