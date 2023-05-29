import { View, Image, StyleSheet, Pressable, Text, Switch, TouchableOpacity, Animated } from 'react-native';
import styles from '../App.style';
import React, { useCallback, useEffect, useState } from 'react';

export default function QABubble(props) {
  const [textShown, setTextShown] = useState(false); //To show remaining Text
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }

  return (
    <View style={styles2.bubble}>
      <Text style={styles.h3}>{props.question}</Text>
      {/* <Text style={styles.p}>Answer: {props.answer}</Text> */}

      <TouchableOpacity onPress={toggleNumberOfLines}>
        <Text numberOfLines={textShown ? undefined : 3} style={styles.p}>
          Answer: {props.answer}
        </Text>
      </TouchableOpacity>
      <SwitchImage />
    </View>
  )
}

// Switch between filled or unfilled heart
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
    height: 'auto',
    backgroundColor: '#FFCC88',
    borderRadius: 20,
    overflow: 'hidden'
  },

  touchable: {
    flex: 0,
    alignSelf: 'flex-end'
  },

  heart: {
    marginBottom: 0,
    marginTop:10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  }
})