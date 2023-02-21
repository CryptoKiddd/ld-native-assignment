import { Box, HStack, Image, Text, VStack } from  'native-base'
import React from 'react'
import { DashboardSingleNewsProp } from '../../types/types'

const DashboardSingleNews = ({header,content,quote,img}:DashboardSingleNewsProp) => {
  return (
  
     <HStack  w='295' h='113' alignItems='center'  rounded='md' mb='8' bgColor='background.900' shadow='2'>
        <Image w='90' alt='ewf' source={img} />
        
        <VStack w='190' p='2' shadow='4'>
            <Text fontSize='xs' color='btn.500'>{header}</Text>
            <Text fontSize='sm' fontWeight='600' my='1' color='font.200'>{content}</Text>
            <Text underline={true} fontSize='xs' color='font.100'>{quote}</Text>
        </VStack>
     </HStack>
    
  )
}

export default DashboardSingleNews