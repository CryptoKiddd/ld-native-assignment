import  { configureStore } from "@reduxjs/toolkit"
import orderSlice from "../features/orderSlice"
import productSlice from "../features/productSlice"
import userSlice from "../features/userSlice"




export const store = configureStore({
    reducer:{
        orders:orderSlice,
        users:userSlice,
        products:productSlice,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    
      serializableCheck: false,
    }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch  = typeof store.dispatch