import { View, Text } from 'native-base'
import React from 'react'

const DashboardHeader = () => {
  return (
  <View   w='100%' h='220' bg="btn.500">
    <Text pl='4'pt='8'pb='4' fontSize='3xl' color='background.900' fontWeight='600'>Welcome Mario!</Text>
    <Text pl='4' color='background.900' >app.vetrinalive.com/mario-store</Text>
  </View>
  )
}

export default DashboardHeader