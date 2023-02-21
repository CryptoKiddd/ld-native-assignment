import { View, Text, Box, HStack, Button, Image } from 'native-base'


const DashboardCustomerSupport = () => {
  return (
    <Box p='6'  alignItems='center' w='326' shadow='2' bgColor='background.900' rounded='md' h='209' mb='6' >
      <HStack w='100%' space={5}>
        <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/headphones.png")}/>
        <Text color="font.200" fontSize='xl' fontWeight='600'>Customer Support</Text>
      </HStack>
      <HStack  w='100%' space={5} my='6' alignItems='center'>
       <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/supporter.png")}/>
        <Text color="font.200" fontSize='md'>Simone is here to help you</Text>
      </HStack>
      <Button w='100' bg='btn.500'>Contact us</Button>
    </Box>
  )
}

export default DashboardCustomerSupport