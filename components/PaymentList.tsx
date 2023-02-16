import { Box,View, VStack,Divider, FlatList,  } from 'native-base';
import {Image} from 'react-native'


import Images from '../assets/Icons/index'
type dataType = {
    name:string,
     img:string

}
const data:dataType[] = [
    {name:'Cash', img:Images.offline},
    {name:'Wire Transfer', img:Images.wire},
    {name:'Stripe', img:Images.stripe},
    {name:'Paypall', img:Images.paypall},
    {name:'Razorplay', img:Images.razorplay},
    {name:'AliPay', img:Images.alipay},
    {name:'Paystack', img:Images.paystack},
]

const PaymentList = () => {
    console.log(Images)
  return (
    <View>

        <FlatList 
     
        data={data}
        renderItem={({item})=>{
         return (
             <Box w='100' bgColor='font.100' borderRadius="md">
           <VStack space="4" divider={<Divider />}>
             <Box px="4" pt="4">
               {item.name}
             </Box>
            <Image alt="Alternate Text " source={{uri:item.img}}/>
            
             <Box px="4" pb="4">
               GeekyAnts
             </Box>
           </VStack>
         </Box>
     )
        }}
     
        />
    </View>

  
  )
}

export default PaymentList