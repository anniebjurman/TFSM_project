import {createStackNavigator} from '@react-navigation/stack';
import ThemePage from './ThemePage';
import HoneycombPage from '../pages/HoneycombPage';

const Stack = createStackNavigator();

function StackNav(){
    return(
      <Stack.Navigator initialRouteName="Themes" screenOptions={{
        headerShown: false,}}>
        <Stack.Screen name='Theme page' component={ThemePage}/>
        <Stack.Screen name='Relaxation' children={()=><HoneycombPage theme='relaxation'/>}/>
        <Stack.Screen name='Mindfulness' children={()=><HoneycombPage theme='mindfulness'/>}/>
        <Stack.Screen name='Acceptance' children={()=><HoneycombPage theme='acceptance'/>}/>
        <Stack.Screen name='Sleep' children={()=><HoneycombPage theme='sleep'/>}/>
        <Stack.Screen name='Self-esteem' children={()=><HoneycombPage theme='self-esteem'/>}/>
        <Stack.Screen name='Movement' children={()=><HoneycombPage theme='movement'/>}/>
      </Stack.Navigator>
    )
  }

  export default StackNav;