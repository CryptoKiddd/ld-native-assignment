 
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
   
    
  };
export type DrawerParamList = {
    Dashboard: undefined;
    Orders: undefined;
    Payment: undefined;
    Products: undefined;
    Subsctiption:undefined;
   
    
  };

  export type DashboardSingleNewsProp={
    header:string,
    content:string,
    quote:string,
    img:string
  }