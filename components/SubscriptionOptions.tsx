import { View, Text,FlatList, Box, VStack, Button, HStack } from 'native-base'
import React from 'react'

type SubProps = {
    options:{
        option:string,
        price:number,
        info:string

    }[],
    period:string
}
const SubscriptionOptions = ({options,period}:SubProps) => {
  return (
    <FlatList
    data={options}
    renderItem={({item})=> <Box mb='5'py='4' px='6' shadow='2'rounded='md' bg='background.900' w='326'>
        <HStack justifyContent='space-between' alignItems="center">

        <VStack h='81px' justifyContent='space-between'>
        <Text fontSize='lg'color='font.200' fontWeight='600' >{item.option}</Text>
        <Text fontSize='xs'color='#00C48C'>{item.info}</Text>
        <Text color='font.200' fontSize='md' py='3' >€ <Text fontSize='2xl' fontWeight='600' color='btn.500'>{item.price}</Text>/{period}</Text>
     
        </VStack>
        <VStack h='81px' justifyContent='space-between'>
        <Text>Max 150 prodotti</Text>
         <Button _text={{color:'background.900'}} bg='btn.500'>Change Plan</Button>
        </VStack>
        </HStack>

    </Box>}

    />
  )
}

export default SubscriptionOptions