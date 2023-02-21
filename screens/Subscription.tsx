
import {useState} from 'react'
import { Switch, Box, Text, VStack, HStack } from 'native-base'
import SubscriptionOptions from '../components/SubscriptionOptions'

const Subscription = () => {
  const [period, setPeriod] = useState('month')
  const [check, setCheck] = useState(false)
  const handleToggle = ():void=>{
    setPeriod(prev=>prev==='year'?'month':'year');
    setCheck(prev=>!prev)
  }
  

  const options = [
    { option:"Free", price:0, info:'' },
    { option:"Vetrina", price:period==="month"?Math.floor(109/12):109, info:'2 mesi in regalo' },
    { option:"Negozio", price:period==="month"?Math.floor(209/12):209, info:'2 mesi in regalo' },
    { option:"Vetrina", price:period==="month"?Math.floor(399/12):399, info:'2 mesi in regalo' }
  ]
  return (
    <Box w='100%' alignItems='center' px='5' pb='10'>
      <VStack mt='8' alignItems='center'>
        <Text fontSize='2xl' color='font.200' fontWeight='600'>Choose Your Plan</Text>
        <HStack ml='12' mt='6'mb='10' alignItems='center'>
          <Text fontSize='md'  color="font.100" fontWeight='600'>Monthly</Text>
        <Switch mx='4' name='year' size='lg' isChecked={check} onToggle={handleToggle} />
        <Text fontSize='md'   color='font.200'fontWeight='600' >Yearly</Text>
        <Text ml='2' fontSize='md'px='2.5' py='1' rounded='md' bg='#00C48C' color='background.900'fontWeight='600' >Promo</Text>
        </HStack>
      </VStack>

  
      <SubscriptionOptions options={options} period={period} />
    </Box>
  )
}

export default Subscription