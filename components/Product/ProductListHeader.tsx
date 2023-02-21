import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, HStack, Button, Switch, VStack } from 'native-base'
import { DrawerParamList, RootStackParamList } from '../../types/types';


const ProductListHeader = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <VStack  p='4' w='100%' h='150px' >
      <Text>Products ( 24 / 100 ) </Text>

      <HStack w='100%' alignItems='center' justifyContent='space-between'>
        <Text>Featured products (7/10)</Text>
        <Button alignItems='center' size='lg' w='50px'  bg='btn.500'_text={{fontSize:'2xl',}} onPress={()=>navigation.navigate("NewProduct")} >+</Button>
      </HStack>
      <HStack>

      <Switch  />
      </HStack>
    </VStack>
  )
}

export default ProductListHeader