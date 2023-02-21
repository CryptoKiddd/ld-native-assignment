import { Box, HStack, Image, Text, VStack } from 'native-base'
import React from 'react'

const DashboardExtensions = () => {
  return (
    <Box p='6' mb='6' alignItems='center' background='background.900' rounded='md' shadow='2'>
        <HStack mb='5'>
            <Text fontSize='xl' color='font.200' fontWeight='600'>

            Extensions Marketplace
            </Text>
        </HStack>
        <HStack mb='6' space='4'>
            <VStack >
                <Box mb='3'  rounded='md' bgColor='#FFA26B' w='140' h='140' alignItems='center'justifyContent='center'>
                <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/wwwGlobe.png")}/>

                </Box>
                <Text color='font.100'>Custom Domain</Text>
            </VStack>
            <VStack>
                <Box mb='3' rounded='md' bgColor='#00C48C' w='140' h='140' alignItems='center'justifyContent='center'>
                 <Text color='background.900' fontWeight='600' fontSize='2xl' textAlign='center' px='4'>+50 Prodotti</Text>
                </Box>
                <Text color='font.100'>+ 50 Products</Text>
            </VStack>
          
        </HStack>
        <HStack w='100%' justifyContent='space-between'>
            <Text color='btn.500' underline={true} >Discover all extensions</Text>
            <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/arrow-right.png")}/>

        </HStack>
    </Box>
  )
}

export default DashboardExtensions