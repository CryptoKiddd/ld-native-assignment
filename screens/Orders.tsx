import { View, Text, HStack,Image } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OrdersList from '../components/OrdersList'

const Orders = () => {
  return (
    <View alignItems='center' pb='2'>
      <HStack alignItems='center' w='100%' justifyContent='space-between' p='4' >
        <Text fontSize="md">Orders:24</Text>
        <TouchableOpacity>
          <HStack bg='#E7E9EC' w='130' h='45' alignItems='center' justifyContent='center' rounded='md'>
            <Text color='white'>Ship Order</Text>
            <Image alt='ec' source={require("../assets/Icons/external-link.png")} />

          </HStack>

        </TouchableOpacity>
      </HStack>
      <OrdersList />
    </View>
  )
}

export default Orders