import { View, Text,Image, HStack } from 'native-base'
import React from 'react'

const DashboardHeader = () => {
  return (
  <View   w='100%' h='220' bg="btn.500">
    <Text pl='4'pt='8'pb='4' fontSize='3xl' color='background.900' fontWeight='600'>Welcome Mario!</Text>
    <HStack alignItems='center' ml='1'>

    <Text pl='4' color='background.900' >app.vetrinalive.com/mario-store</Text>
    <Image alt='bbr' source={require('../../assets/Icons/external-link.png')} />
    </HStack>
  </View>
  )
}

export default DashboardHeader