import { View, Image, StyleSheet, Pressable, Text, Switch, TouchableOpacity } from 'react-native';
import styles from '../App.style';
import React, {useState} from 'react';


export default function QABubble(props) {
    return (
        <View style={styles2.bubble}>
            <Text style={styles.h3}>{props.question}</Text>
            <Text style={styles.p}>Answer: {props.answer}</Text>
            <SwitchImage/>
        </View>
    )
}

const SwitchImage = () => {
    const [pressed, setPressed] = useState(false);
    const like_uri1 = require('../assets/QA/heart.png');
    const like_uri2 = require('../assets/QA/heart_filled.png');
  
    const pressLike = () => {
      setPressed(!pressed);
    };
  
    return (
      <TouchableOpacity style={styles2.touchable} onPress={pressLike}>
        <Image
          source={pressed ? like_uri2 : like_uri1}
          style={styles2.heart}
        />
      </TouchableOpacity>
    );
  };


const styles2 = StyleSheet.create({
    bubble: {
        marginTop: 20,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 15,
        width: '90%',
        backgroundColor: '#FFCC88',
        borderRadius: 20
    },

    touchable: {
        flex:0, 
        alignSelf:'flex-end'
    },

    heart: {
        marginTop: 10,
        marginBottom: 0,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'flex-end'
    }
})