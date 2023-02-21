import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderType } from "../../types/types";

type ordersState ={
    orders:OrderType[] | undefined
    order:OrderType | undefined
}

const initialState:ordersState = {
    orders:[
        {
            name:"Anthony Joshua",
            price:1234,
            status:"Shipped",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Robby Williams",
            price:6543,
            status:"New",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Donald Trump",
            price:2345,
            status:"Cancelled",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Mike O'Hearn",
            price:2345,
            status:"In progress",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Devon Booker",
            price:9466,
            status:"New",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Mohammad Salah",
            price:8421,
            status:"Shipped",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Tommy Markannen",
            price:1111,
            status:"In progress",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Gvatsa Beridze",
            price:3453,
            status:"In progress",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
        },
        {
            name:"Ronald Reigan",
            price:9876,
            status:"New",
            orderedAt:"29/05/2020  18:54",
            address:"Via Roma, 59, Torre del Greco, NA, 80059",
            client:'Mario Rossi',
            tel:"+39 3333232331",
            fiscal:"RSSMAR22T33M123K0",
            service:"Forex",
            orderline:"Numero/Link ordine: FR12342123 2314"
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
