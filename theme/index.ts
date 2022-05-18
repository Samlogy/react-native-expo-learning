import {extendTheme} from 'native-base';
import {themeConfig, fontConfig, fonts, colors, breakpoints} from './utilities';

const theme = extendTheme({
  // fontConfig,
  // fonts,
  colors,
  breakpoints,
  ...themeConfig,
});

export default theme;
