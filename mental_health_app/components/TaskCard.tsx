import React from "react";
import {StyleSheet, Text, View, Image } from 'react-native';
import AppStyle from "../App.style";

interface Props {
  title: string;
  text: string;
  color: string;
  height: string;
  radius: number;
  width: string;
  png: string;
}

const TaskCard: React.FC<Props> = ({ 
    title,
    color,
    text,
    height,
    radius,
    width,
    png
    
    

  }) => { 
  return (
    <>
    <View 
      style={{
         backgroundColor: color,
         borderRadius: radius,
         height,
         width,
      }}
    >   
    <View
    style={{
        marginTop: '15px',
        marginLeft:'25px',
        marginRight: '25px'
    }}>
        <Text style={[AppStyle.h2, styles.colour]}>{title}</Text>
        <Text style={[AppStyle.p, styles.colour,styles.margin]}>{text}</Text>
    </View>
    <View
    style={{
        alignItems: 'center',
        display: 'flex'}}>
        <Image style={stylesPng.size} source={require('../assets/' + png)}></Image>
    </View>
   
    </View>
   
    </> 
  );
}
const styles = StyleSheet.create({
    colour: {
      color: "#000",
     },
     margin: {
        marginTop: '7px'
       },

  });

  const stylesPng = StyleSheet.create({
    size: {
      width: '100px',
      height: '100px',
      resizeMode: 'contain'
     },

  });

export default TaskCard;