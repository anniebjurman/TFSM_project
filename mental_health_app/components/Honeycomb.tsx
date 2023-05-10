import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import styles from '../App.style';

export default function Honeycomb(props: any) {
    const favorite: boolean = props.isFavorite;
    const theme: string = props.theme;
    var backgroundPath;
    var randomNumber: number = Math.floor(Math.random() * 5) + 1 ;

    switch(theme) {
        case 'movement':
            switch(randomNumber) {
                case 1:
                    backgroundPath = require('../assets/honeycomb/movement/light-pattern.png');
                    break;
                case 2:
                    backgroundPath = require('../assets/honeycomb/movement/dark-pattern.png');
                    break;
                case 3:
                    backgroundPath = require('../assets/honeycomb/movement/light.png');
                    break;
                case 4:
                    backgroundPath = require('../assets/honeycomb/movement/medium.png');
                    break;
                case 5:
                    backgroundPath = require('../assets/honeycomb/movement/dark.png');
                    break;
            }
            break;
        case 'acceptance':
            switch(randomNumber) {
                case 1:
                    backgroundPath = require('../assets/honeycomb/acceptance/light-pattern.png');
                    break;
                case 2:
                    backgroundPath = require('../assets/honeycomb/acceptance/dark-pattern.png');
                    break;
                case 3:
                    backgroundPath = require('../assets/honeycomb/acceptance/light.png');
                    break;
                case 4:
                    backgroundPath = require('../assets/honeycomb/acceptance/medium.png');
                    break;
                case 5:
                    backgroundPath = require('../assets/honeycomb/acceptance/dark.png');
                    break;
            }
            break;
        case 'mindfulness':
            switch(randomNumber) {
                case 1:
                    backgroundPath = require('../assets/honeycomb/mindfulness/light-pattern.png');
                    break;
                case 2:
                    backgroundPath = require('../assets/honeycomb/mindfulness/dark-pattern.png');
                    break;
                case 3:
                    backgroundPath = require('../assets/honeycomb/mindfulness/light.png');
                    break;
                case 4:
                    backgroundPath = require('../assets/honeycomb/mindfulness/medium.png');
                    break;
                case 5:
                    backgroundPath = require('../assets/honeycomb/mindfulness/dark.png');
                    break;
            }
            break;
        case 'sleep':
            switch(randomNumber) {
                case 1:
                    backgroundPath = require('../assets/honeycomb/sleep/light-pattern.png');
                    break;
                case 2:
                    backgroundPath = require('../assets/honeycomb/sleep/dark-pattern.png');
                    break;
                case 3:
                    backgroundPath = require('../assets/honeycomb/sleep/light.png');
                    break;
                case 4:
                    backgroundPath = require('../assets/honeycomb/sleep/medium.png');
                    break;
                case 5:
                    backgroundPath = require('../assets/honeycomb/sleep/dark.png');
                    break;
            }
            break;
        case 'relaxation':
            switch(randomNumber) {
                case 1:
                    backgroundPath = require('../assets/honeycomb/relaxation/light-pattern.png');
                    break;
                case 2:
                    backgroundPath = require('../assets/honeycomb/relaxation/dark-pattern.png');
                    break;
                case 3:
                    backgroundPath = require('../assets/honeycomb/relaxation/light.png');
                    break;
                case 4:
                    backgroundPath = require('../assets/honeycomb/relaxation/medium.png');
                    break;
                case 5:
                    backgroundPath = require('../assets/honeycomb/relaxation/dark.png');
                    break;
            }
            break;
        case 'self-esteem':
            switch(randomNumber) {
                case 1:
                    backgroundPath = require('../assets/honeycomb/self-esteem/light-pattern.png');
                    break;
                case 2:
                    backgroundPath = require('../assets/honeycomb/self-esteem/dark-pattern.png');
                    break;
                case 3:
                    backgroundPath = require('../assets/honeycomb/self-esteem/light.png');
                    break;
                case 4:
                    backgroundPath = require('../assets/honeycomb/self-esteem/medium.png');
                    break;
                case 5:
                    backgroundPath = require('../assets/honeycomb/self-esteem/dark.png');
                    break;
            }
            break;
    }

    return (
        <>
            <View style={styles2.container}>
                <ImageBackground style={[styles2.hcImage]} source={backgroundPath}>
                    <View style={styles2.starContainer}>
                        {favorite ? (
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
        height: 150,
    },
    starContainer: {
        height: 60,
        width: '100%',
        paddingTop: 35
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