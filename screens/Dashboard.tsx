import { View, Text, Box,ScrollView, HStack} from 'native-base'
import React from 'react'


const Dashboard = () => {
  return (
    <ScrollView>
    <View   w='100%' h='220' bg="btn.500">
      <Text pl='4'pt='8'pb='4' fontSize='3xl' color='background.900' fontWeight='600'>Welcome Mario!</Text>
      <Text pl='4' color='background.900' >app.vetrinalive.com/mario-store</Text>
    </View>

    <Box mt='-20' alignItems='center'>
      <Box p='4' shadow='4' mb='6' alignItems='center' justifyContent='space-between' borderRadius='md' bgColor='background.900' w="326" h='280'>
        <Text color='font.200' fontSize='md' fontWeight='600' mt='4' mb='1' >Configura la tua vetrina</Text>
        <Text w='98' textAlign='center' fontSize='3xl'  color='btn.900' > 0% </Text>
        <Text w='98' mt='-6' textAlign='center' fontSize='md'  color='btn.900' >completato</Text>
        <Text color='font.100' w="290"textAlign='center' >Completa tutti i step per ricevere maggiore visibilità e una vetrina  accattivante </Text>
        <HStack w="100%" alignItems='center' justifyContent='space-between'  >
          <Text  color='btn.500' >Completa la configurazione!</Text>
          </HStack> 
      </Box>
      {/* visitors */}
      <Box shadow='4' mb='6'p='6' alignItems='center' justifyContent='space-between' borderRadius='md' bgColor='background.900' w="326" h='180'>
       
          <HStack justifyContent='space-between' w="100%" alignItems='center'   >
          <Text fontSize="xl" fontWeight='600' color='font.200'>Visitors</Text>
          <Text fontSize="sm" color='font.100'>This Month</Text>
          </HStack> 
      
       <Text fontSize="4xl" fontWeight='600' color='font.200'>0</Text>
       <HStack w="100%" alignItems='center' justifyContent='space-between'  >
          <Text  color='btn.500' >Vuoi ricevere più visite? Contattaci!</Text>
          </HStack> 
      </Box>
       {/* orders */}
      <Box shadow='4' mb='6'p='6' alignItems='center' justifyContent='space-between' borderRadius='md' bgColor='background.900' w="326" h='209'>
          <HStack justifyContent='space-between' w="100%" alignItems='center'   >
          <Text fontSize="xl" fontWeight='600' color='font.200'>Orders</Text>
          <Text fontSize="sm" color='font.100'>This Month</Text>
          </HStack> 
          <HStack w="100%" alignItems='center' justifyContent='space-between'  >
          <Text fontSize="md" color='font.100' fontWeight='600' >Orders received:</Text>
          <Text fontSize="2xl" fontWeight='600' color='font.200'>0</Text>
          </HStack>
          <HStack mt='-4' w="100%" alignItems='center' justifyContent='space-between'  >
          <Text fontSize="md" color='font.100' fontWeight='600' >Earnings:</Text>
          <Text fontSize="2xl" fontWeight='600' color='font.200'>€ 0,00</Text>
          </HStack> 
          <HStack w="100%" alignItems='center' justifyContent='space-between'  >
          <Text  color='btn.500' >10 free tips to increase your sales</Text>
          </HStack> 
      
  
      
      </Box>

    </Box>


    </ScrollView>
  )
}

export default Dashboard