import { View, Text, Box, HStack, Button } from 'native-base'


const DashboardCustomerSupport = () => {
  return (
    <Box p='6'  alignItems='center' w='326' shadow='2' bgColor='background.900' rounded='md' h='209' mb='6' >
      <HStack>
        <Text color="font.200" fontSize='xl' fontWeight='600'>Customer Support</Text>
      </HStack>
      <HStack my='6'>
        <Text color="font.200" fontSize='md'>Simone is here to help you</Text>
      </HStack>
      <Button w='100' bg='btn.500'>Contact us</Button>
    </Box>
  )
}

export default DashboardCustomerSupport