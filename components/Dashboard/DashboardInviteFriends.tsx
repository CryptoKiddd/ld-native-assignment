import { HStack,Box, Text } from 'native-base'
import React from 'react'

const DashboardInviteFriends = () => {
  return (
    <Box p='6'  justifyContent='center'  alignItems='center' w='326' shadow='2' bgColor='background.900' rounded='md' h='243' >
    <HStack>
      <Text color="font.200" fontWeight='600' fontSize='xl' > Invite A Friend</Text>
    </HStack>
    <HStack my='6' px='4'>
      <Text color="font.200" ><Text color="#00C48C" fontWeight='600'>Receive 50 products </Text> by inviting a friend who subscribes to a plan.
       Your friend will receive a 30% discount coupon valid for any plan.</Text>
    </HStack>
    <HStack >
      <Text underline={true} color="btn.500" >Start inviting friends!</Text>
    </HStack>

  </Box>
  )
}

export default DashboardInviteFriends