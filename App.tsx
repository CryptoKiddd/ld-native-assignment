import 'react-native-gesture-handler';
import {NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from "./theme/theme";
import { DrawerParamList, RootStackParamList } from "./types/types";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Dashboard from './screens/Dashboard';
import Products from './screens/Products';
import Orders from './screens/Orders';
import Payment from './screens/Payment';
import Subscription from './screens/Subscription';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
const Drawer = createDrawerNavigator<DrawerParamList>()
function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Dashboard'>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Subsctiption" component={Subscription} />
    </Drawer.Navigator>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer  >
    <NativeBaseProvider config={config} theme={theme}>

      
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login" >
        <Stack.Screen name="Main" component={AppDrawer} />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>

    

    </NativeBaseProvider>
    </NavigationContainer>
  );
}