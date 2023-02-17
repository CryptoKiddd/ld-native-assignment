import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderType } from "../../types/types";

type ordersState ={
    orders:OrderType[] | undefined
    order:OrderType | undefined
}

const initialState:ordersState = {
    orders:[
        {
            "name":"John Doe",
            "price":1234,
            "status":"Shipped"
        },
        {
            "name":"Robby Williams",
            "price":6543,
            "status":"New"
        },
        {
            "name":"Donald Trump",
            "price":2345,
            "status":"Cancelled"
        },
        {
            "name":"Mike O'Hearn",
            "price":2345,
            "status":"In progress"
        },
        {
            "name":"Devon Booker",
            "price":9466,
            "status":"New"
        },
        {
            "name":"Mohammad Salah",
            "price":8421,
            "status":"Shipped"
        },
        {
            "name":"Joe Rogan",
            "price":1111,
            "status":"In progress"
        },
        {
            "name":"Gvatsa Beridze",
            "price":3453,
            "status":"In progress"
        },
        {
            "name":"Ronald Reigan",
            "price":9876,
            "status":"New"
        }
    ],
    order:undefined

}


export const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{

        setOrder:(state,action:PayloadAction<OrderType>)=>{
            state.order = action.payload
            

        }
    }

})

export default orderSlice.reducer
export const {setOrder}  = orderSlice.actions
