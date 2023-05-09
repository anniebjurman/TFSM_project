import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './App.css';

export default function App() {
  return (
    <View style={styles.container}>
      <h1>Hej!</h1>
      <Text>Open up App.js to start working on your app!</Text>
      <h1>Button</h1>
      <TaskButton 
        border="none"
        color="pink"
        height = "52px"
        onClick={() => console.log("You clicked on next!")}
        radius = "25px"
        width = "149.83px"
        children = "hello"

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
