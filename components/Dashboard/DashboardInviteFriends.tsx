import { HStack,Box, Text,Image } from 'native-base'
import React from 'react'

const DashboardInviteFriends = () => {
  return (
    <Box p='6'  justifyContent='center'  alignItems='center' w='326' shadow='2' bgColor='background.900' rounded='md' h='243' >
    <HStack  w='100%' space={5}  alignItems='center'>
    <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/users.png")}/>

      <Text color="font.200" fontWeight='600' fontSize='xl' > Invite A Friend</Text>
    </HStack>
    <HStack my='6' px='4'>
      <Text color="font.200" ><Text color="#00C48C" fontWeight='600'>Receive 50 products </Text> by inviting a friend who subscribes to a plan.
       Your friend will receive a 30% discount coupon valid for any plan.</Text>
    </HStack>
    <HStack w='100%' justifyContent='space-between' >
      <Text underline={true} color="btn.500" >Start inviting friends!</Text>
      <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/arrow-right.png")}/>

    </HStack>

  </Box>
  )
}

export default DashboardInviteFriends