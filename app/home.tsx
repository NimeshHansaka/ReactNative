import { View, Text ,ScrollView } from 'react-native'
import React from 'react'
//import AppStatusBar from '../layout/AppStatusBar'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <ScrollView 
    className='bg-[#101010] h-[100%] ' showsVerticalScrollIndicator={false}>

        {/* <AppStatusBar/> */}
      <Text className="text-red-700">Home</Text>
    <Link href='/' className='text-white'>Home</Link>
    </ScrollView>
  )
}

export default Home