import React from "react";
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  border: string;
  color: string;
  children?: string;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const TaskButton: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
      }}
    >
    <p style={styles.text}>{children}</p>
    </button>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  },
});
export default TaskButton;