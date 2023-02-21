import { View, Text, ScrollView, VStack, HStack, Checkbox, Box, Image } from 'native-base'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

import {  useNavigation } from '@react-navigation/native';
import { OrderParamList, OrderType } from '../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrdersList = () => {
    const ordersData = useSelector((state:RootState)=>state.orders.orders)
     const navigation = useNavigation<NativeStackNavigationProp<OrderParamList>>()
  return (
    <VStack w='326' mt='3' textAlign='left' bg='background.900' rounded='md' shadow='2'  >
      <HStack  borderWidth='1' borderColor='btn.800' p='4' justifyContent='space-between' w="100%">
      <HStack w='18%'>
             <Checkbox   value='' isChecked={false} />
             <Text ml='1' >#</Text>
             <Image alt='dc' source={require("../assets/Icons/nmb.png")} />
      </HStack>
      <HStack  w='35%'>

        <Text>Name</Text>
        <Image alt='dc' source={require("../assets/Icons/nmb.png")} />
      </HStack>
      <HStack  w='25%'>

        <Text >Stato</Text>
        <Image alt='dc' source={require("../assets/Icons/nmb.png")} />

      </HStack>
        <Text w='5%'></Text>
      </HStack>
      {ordersData?.map((row,idx)=>{
        return(
          <TouchableOpacity onPress={()=>navigation.push('Order',{data:row})} key={idx+ordersData.length+1}>
          <HStack borderWidth='1' borderColor='btn.800' h='56px' p='4' alignItems='center' justifyContent='space-between' w="100%"  >
            <HStack w='20%'>
             <Checkbox   value='' isChecked={false} />
             <Text ml='1'pr='1' >{row.price}</Text>
            </HStack>
            <Text h='57px' p='2' pr='10'   borderWidth='1' borderColor='btn.800' w='40%'>{row.name}</Text>
            <Text color='white' display='flex' pt='1.5' textAlign='center' rounded='md' h='9'alignItems='center'  w='25%' bg={row.status==="Shipped"?'btn.300':row.status==="New"?"btn.500":row.status==="Cancelled"?"btn.900":'#FFA26B'}  >{row.status}</Text>
            <Text fontWeight='800' pl='3.5' pt='1' fontSize='xl'  borderLeftWidth='1' borderColor='btn.800'  w='8' h='56px'  >...</Text>
          </HStack>
          </TouchableOpacity>
        )
      })
      }
   
    
        
    </VStack>
  )
}

export default OrdersList