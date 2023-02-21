import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import NewProduct from "../screens/NewProduct";
import Order from "../screens/Order";
import Orders from "../screens/Orders";
import Payment from "../screens/Payment";
import Products from "../screens/Products";
import Subscription from "../screens/Subscription";
import { DrawerParamList, OrderParamList } from "../types/types";

const OrderStack = createNativeStackNavigator<OrderParamList>();

export const OrderNav =()=>{
  return(
    <OrderStack.Navigator>
      <OrderStack.Screen  name='OrderRoot' options={{headerShown: false}} component={Orders} />
      <OrderStack.Screen  name='Order' component={Order}  options={{headerShown: false}}/>
    </OrderStack.Navigator>
  )
}
const Drawer = createDrawerNavigator<DrawerParamList>()
export const AppDrawer=() =>{
  return (
    <Drawer.Navigator initialRouteName='Dashboard'>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="NewProduct" component={NewProduct} />
      <Drawer.Screen name="Orders" component={OrderNav} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Subsctiption" component={Subscription} />
    </Drawer.Navigator>
  );
}