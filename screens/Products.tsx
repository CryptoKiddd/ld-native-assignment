import { View, Text } from 'react-native'
import { DataTable } from 'react-native-paper';
import {useState,useEffect} from 'react'

const pageOptions = [2, 3, 4];

const Products = () => {
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState(pageOptions[0]);
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
  
  
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Product Name</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>...</DataTable.Title>
        </DataTable.Header>
  
        {}
  
  
        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={pageOptions}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        />
      </DataTable>
  
  )
}

export default Products