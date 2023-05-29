import { View, Text, Image } from 'react-native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer } from '@react-navigation/native';
import NavigationBar from './components/NavigationBar'
import {createStackNavigator} from '@react-navigation/stack';
import HoneycombPage from './pages/HoneycombPage';


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
      <NavigationContainer>
        <NavigationBar/>
        {/* <Stack.Navigator>
          <Stack.Screen name='Relaxation' component={()=> <HoneycombPage theme='relaxation'/>}/>
        </Stack.Navigator> */}
      </NavigationContainer>
  );
  }
}
