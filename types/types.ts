import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

 
export type FormPropsType = {
    inputs:string[],
    subHeader:string,
    title:string,
    btntext:string,
    context:"login"|'register'|"forgot",


}
export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    NewProduct?:undefined;
    
  };
export type DrawerParamList = {
    Dashboard: undefined;
    Orders: undefined;
    Payment: undefined;
    Products: undefined;
    Subsctiption:undefined;
    NewProduct?:undefined;
   
    
  };


  export type DashboardSingleNewsProp={
    header:string,
    content:string,
    quote:string,
    img:string |ImageSourcePropType
  }
  export type ProductType={
    name:string,
    price:number,
  }
  export type OrderType={
    name:string,
    status:string,
    price:number,
    orderedAt:string,
    address:string,
    client:string,
    tel:string,
    fiscal:string,
    service:string,
    orderline:string
   
  }
  export type UserType={
    name:string,
    email:string,
    password:string,
  }
  export type OrderParamList = {
    OrderRoot:undefined,
    Order:{data:OrderType}
     
      
    };