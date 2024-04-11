
import React, { useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import { View,StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
   
  } from '@expo-google-fonts/poppins';
import AppStatusBar from '../layout/AppStatusBar';

const height = StatusBar.currentHeight

console.log(height);

const Layout = () => {

// const [fontsLoad,setFontLoad] = useState(false);

// const [font,error] = useFonts({
//     'Poppins400Regular':Poppins_400Regular

// })


const [fontsLoad] = useFonts({
    'Poppins400Regular':Poppins_400Regular,
    'Poppins_600SemiBold': Poppins_600SemiBold,
   ' Poppins_500Medium ' :Poppins_500Medium,
    'Poppins_700Bold' : Poppins_700Bold,

})


// useEffect(()=>{
//     if(font){
//     setFontLoad(true)
//     }
//     console.log("font error",error);

// },[font])


// useState(()=>{
//     setFontLoad(true)

// })



if(!fontsLoad){
    // return <AppLoading/>
    return null
}
  return ( 
  <View style={{paddingTop: height,flex:1,
    backgroundColor:"#101010"}}>
        <AppStatusBar/>
   
    <Slot/>
    </View>
    );

};

export default Layout;

