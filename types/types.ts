 
export type FormPropsType = {
    inputs:string[],
    header:string,
    subHeader:string,
    title:string,
    btntext:string,
    context:"login"|'register'|"forgot",


}
export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
   
    
  };