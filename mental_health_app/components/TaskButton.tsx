import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import AppStyle from "../App.style";

interface Props {
  border: string;
  color: string;
  text: string;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const TaskButton: React.FC<Props> = ({ 
    border,
    color,
    text,
    height,
    onClick, 
    radius,
    width,
    

  }) => { 
  return (
    <>
    
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         display:'grid',
         alignContent: 'center'
      }}
    >
      <p style={AppStyle.p}>{text}</p>
    </button>
   
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: 'Quicksand'
   },
});

export default TaskButton;