import { Box, View } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import ProductList from '../components/Product/ProductList'
import ProductListHeader from '../components/Product/ProductListHeader'



const Products = () => {


  return (


    <ScrollView>
    <ProductListHeader />
    <View p='4'  pt='0'> 
    <ProductList />
    </View>
    </ScrollView>
 
  )
}

export default Products