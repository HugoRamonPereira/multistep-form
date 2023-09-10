import { createGlobalStyle } from 'styled-components';

import LexendLightTtf from '../assets/fonts/Lexend-ExtraLight.ttf';
import LexendLightWoff from '../assets/fonts/Lexend-ExtraLight.woff';
import LexendLightWoff2 from '../assets/fonts/Lexend-ExtraLight.woff2';
import LexendRegularTtf from '../assets/fonts/Lexend-Regular.ttf';
import LexendRegularWoff from '../assets/fonts/Lexend-Regular.woff';
import LexendRegularWoff2 from '../assets/fonts/Lexend-Regular.woff2';
import LexendBoldTtf from '../assets/fonts/Lexend-SemiBold.ttf';
import LexendBoldWoff from '../assets/fonts/Lexend-SemiBold.woff';
import LexendBoldWoff2 from '../assets/fonts/Lexend-SemiBold.woff2';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lexend, sans-serif;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

  @font-face {
    font-family: 'LexendLight';
    font-weight: 200;
    font-display: 'swap';
    font-style: 'light';
    src: url('${LexendLightTtf}') format('truetype'),
         url('${LexendLightWoff}') format('woff'),
         url('${LexendLightWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'LexendNormal';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${LexendRegularTtf}') format('truetype'),
         url('${LexendRegularWoff}') format('woff'),
         url('${LexendRegularWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'LexendBold';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'bold';
    src: url('${LexendBoldTtf}') format('truetype'),
         url('${LexendBoldWoff}') format('woff'),
         url('${LexendBoldWoff2}') format('woff2');
  }
`;
