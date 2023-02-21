import { Box, FlatList, HStack, Button, Text,  } from 'native-base';
import { Image } from 'native-base';

type dataType = {
    name:string,
     img:string

}
const data:dataType[] = [
    {name:'Cash', img:require('../assets/PaymentIcons/offline.png')},
    {name:'Wire Transfer', img:require('../assets/PaymentIcons/Group.png')},
    {name:'Stripe', img:require('../assets/PaymentIcons/logos_stripe.png')},
    {name:'Paypall', img:require('../assets/PaymentIcons/paypall.png')},
    {name:'Razorplay', img:require('../assets/PaymentIcons/razoplay.png')},
    {name:'AliPay', img:require('../assets/PaymentIcons/alipay.png')},
    {name:'Paystack', img:require('../assets/PaymentIcons/paystack.png')},
]

const PaymentList = () => {
    
  return ( 
    <Box alignItems='center' mt='4' >
       
        <FlatList 
        ListHeaderComponent={ <Text pl='4' fontSize='xl' fontWeight='600' color='font.200' pt='10' pb='4'>Payment Methods</Text>}
        data={data}
        renderItem={({item,index})=>{
         return (
          <Box mb='4'  bgColor='background.900' px='4' py='4' justifyContent='space-between' w="326px" h='134' borderRadius="md">
           <HStack h='10' justifyContent='space-between' space="4" >     
            <Image w='50' resizeMode='contain' alt="Alternate Text " source={item.img}/>
            <Button bg={index===0?'btn.400':'btn.800'} _text={{color:index===0?'btn.700':'font.300'}} >Disable</Button>
           </HStack>
           <Text  color='font.200' fontSize='lg' fontWeight='600'>{item.name}</Text>
         </Box>
     )}} />


    </Box>

  
  )
}

export default PaymentList