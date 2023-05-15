import 'react-native-gesture-handler';
import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import * as Font from 'expo-font';
//import {AppLoading} from 'expo';
//import AppLoading from 'expo-app-loading';

//import * as SplashScreen from 'expo-splash-screen';
import MealsNavigator from './navigation/MealsNavigator';

/*const fetchFonts = () => {
return Font.loadAsync({
  'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
});
}*/

export default function App() {

  //const [fontLoaded , setFontLoaded] = useState(false);

  /*if(!fontLoaded){
    return(
      <SplashScreen 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)}
        onError={(error)=> console.warn(error)}
      />);
  }*/

  return (
    <MealsNavigator/>
  );
}


