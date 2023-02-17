import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";
 


type userInitialState = {
    user:UserType | undefined

}
const initialState:userInitialState = {
    user: undefined,

}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        logUser: (state, action:PayloadAction<UserType>)=>{
            state.user = action.payload
        },
        logOutUser:(state)=>{
            state.user = undefined

        },


    }


})

export default userSlice.reducer
export const { logUser,logOutUser } = userSlice.actions