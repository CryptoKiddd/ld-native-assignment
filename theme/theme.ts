
import { extendTheme } from 'native-base';
import {COLORS, FONTS} from '../constants/index'

export const theme = extendTheme({ colors: COLORS }, {fontConfig:FONTS});
