import {useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';


import { ProductType } from '../types/types'


const ProductList = () => {
    const products = useSelector((state:RootState)=>state.products.products)

   
  return (

    <DataTable>
        <DataTable.Header>
          <DataTable.Title>Product Name</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>...</DataTable.Title>
        </DataTable.Header>

        {products?.map(product=>{
            return(
                <DataTable.Row>
                <DataTable.Cell>{product.name}</DataTable.Cell>
                <DataTable.Cell>{product.price}</DataTable.Cell>
                <DataTable.Cell>abs</DataTable.Cell>
            </DataTable.Row>
            )
        })}
  
  
        {/* <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={pageOptions}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        /> */}
      </DataTable>
  )
}

export default ProductList