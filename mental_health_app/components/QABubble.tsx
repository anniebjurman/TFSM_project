import { StyleSheet, View, Text, Image } from 'react-native';
import styles from '../App.style';

export default function QABubble() {
    return (
        <View style={styles2.bubble}>
            <Text style={styles.h3}>Question: How to make friends?</Text>
            <Text style={styles.p}>Answer: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum....</Text>
            <Image style={styles2.heart} source={require('../assets/QA/heart.png')}></Image>
        </View>
    )
}

const styles2 = StyleSheet.create({
    bubble: {
        padding: 25,
        width: '90%',
        backgroundColor: '#FFCC88',
        borderRadius: 20
    },
    heart: {
        width: 30,
        height: 30
    }
})