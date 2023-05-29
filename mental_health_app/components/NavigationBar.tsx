import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThemePage from './ThemePage';
import NavigationBarButton from './NavigationBarButton';

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator initialRouteName="Themes" screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E84855',
        tabBarStyle: navigationBarStyles.navBar
        }}>
      
      <Tab.Screen name="To-do" component={ThemePage} options={{
        tabBarIcon: ({focused, color, size}) => (
          <Image style={{width: 39, height: 39, marginLeft: 30}} source={focused ? require('../assets/ToDoActive.png') : require('../assets/ToDoInactive.png')}/>
        ),
      tabBarButton: props => <NavigationBarButton {...props}/>}}/>

      <Tab.Screen name="Themes" component={ThemePage} options={{
        tabBarIcon: ({focused, color, size}) => (
            <Image style={{width: 60, height: 60, marginBottom:20}} source={focused ? require('../assets/ThemesActive.png') : require('../assets/ThemesInactive.png')}/>
        ),
        tabBarButton: props => <NavigationBarButton {...props}/>}}/>

      <Tab.Screen name="QA" component={ThemePage} options={{
        tabBarIcon: ({focused, color, size}) => (
          <Image style={{width: 39, height: 39, marginRight: 30}} source={focused ? require('../assets/QaActive.png') : require('../assets/QaInactive.png')}/>
        ),
        tabBarButton: props => <NavigationBarButton {...props}/>}}/>

    </Tab.Navigator>
  );
}

export default NavigationBar;

const navigationBarStyles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        backgroundColor: '#F6F6F4',
        paddingBottom: 35,
        paddingTop:30
    }
});