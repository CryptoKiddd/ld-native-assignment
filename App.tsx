import 'react-native-gesture-handler';
import {NativeBaseProvider, Box, StatusBar } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from "./theme/theme";
import { RootStackParamList } from "./types/types";

import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import { store } from './redux/store/store';
import {Provider} from "react-redux";
import { AppDrawer } from './navigations/navigations';
// import { SafeAreaView } from 'react-native';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};



const Stack = createNativeStackNavigator<RootStackParamList>();

 function App() {
  return (
    <>

      <StatusBar 
      barStyle = "dark-content"
      backgroundColor="white" />

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
    </>
  );
}
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};