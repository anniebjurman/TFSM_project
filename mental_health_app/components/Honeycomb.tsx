import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import styles from '../App.style';

export default function Honeycomb(props: any) {

    return (
        <>
            <View style={styles2.container}>
                <ImageBackground style={[styles2.hcImage]} source={require('../assets/honeycomb/hc-green.png')}>
                    <View style={styles2.starContainer}>
                        {props.isFavorite ? (
                            <Image style={[styles2.starIcon]} source={require('../assets/honeycomb/star.png')}></Image>
                        ) : <></>}
                    </View>
                    <Text style={styles.h1}>Title</Text>
                </ImageBackground>
            </View>
        </>
    );
}

const styles2 = StyleSheet.create({
    container: {
        width: 140,
        height: 140,
    },
    starContainer: {
        height: 50,
        width: '100%',
        paddingTop: 25
    },
    starIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    hcImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
    }
});