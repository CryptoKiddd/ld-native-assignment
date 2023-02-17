import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";


type  productsInitialState ={
    products: ProductType[] |undefined;
    product: ProductType | undefined
}
  

const initialState:productsInitialState = {
    products:[
        {
            "name":"T-Shirt",
            "price":30
        },
        {
            "name":"Shirt",
            "price":40
        },
        {
            "name":"Skirt",
            "price":10
        },
        {
            "name":"Mask",
            "price":15
        },
        {
            "name":"Pyjama",
            "price":50
        },
        {
            "name":"Jeans",
            "price":99
        },
        {
            "name":"Hoodie",
            "price":70
        },
        {
            "name":"Gloves",
            "price":25
        },
        {
            "name":"Sneakers",
            "price":99
        }
    ],
    product:undefined
}




const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

        setProduct:(state, action:PayloadAction<ProductType |undefined>)=>{
            state.product = action.payload


        }

    }
})
export default productSlice.reducer
export const {setProduct} = productSlice.actions