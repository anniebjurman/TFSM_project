import { View, Text, Image } from 'react-native';
import styles from './App.style';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  // Load fonts
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  });

  // Show loading screen if the fonts are still loading
  if(!fontsLoaded){
    SplashScreen.hideAsync();
  }
  else{
  // A regular return of the element
  // NOTE: Use <Text> for all text element, and add the right style for h1 etc instead
    return (
    <>
      <View style={[styles.container, styles.body]}>
        <Text style={styles.h1}>Hi!</Text>
        <Text style={styles.p}>Open up App.js to start working on your app!</Text>
        <Text style={styles.h2}>Welcome</Text>
        <Text style={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, doloremque ad a corrupti</Text>
        <Honeycomb isFavorite={true}></Honeycomb>
      </View>
    </>
  );
  }
}
