import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import PoppinsText from '../layout/PoppinsText'
//import AppStatusBar from '../layout/AppStatusBar'

const Index = () => {
  return (
    <View>
      {/* <AppStatusBar/> */}
      <Text className='text-red-600 text-4xl font-bold'>Self Service Restuarent</Text>
     <Link href="/user/" className='text-white'>User</Link>
     <Link href="/home" className='text-white'>Home</Link>
     
     <PoppinsText>Nimesh</PoppinsText>

     </View>
  )
}

export default Index 