
import { extendTheme } from 'native-base';
import {COLORS, FONTS} from '../constants/index'

export const theme = extendTheme({
     colors: COLORS,
     fontConfig:FONTS,
     components: {
        Button: {
          baseStyle: {
            background: "linear-gradient(180deg, #21B8F9 0%,#21b8f9 132.05%)",
          },
          
        },
      },
    });


    export default {
        0: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
        },}
