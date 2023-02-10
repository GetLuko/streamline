/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Couch = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4.478 5.392A4 4 0 0 1 8.432 2h7.136a4 4 0 0 1 3.954 3.392l.56 3.638A5.498 5.498 0 0 0 14.6 12H9.4a5.497 5.497 0 0 0-5.482-2.97l.56-3.638Z"
      fill={color}
    />
    <Path
      d="M19.5 11a3.502 3.502 0 0 1 2.043 6.342c-.313.226-.543.567-.543.953V20a2 2 0 0 1-2 2v1.382a.618.618 0 0 1-1.17.276L17 22H7l-.83 1.658A.618.618 0 0 1 5 23.382V22a2 2 0 0 1-2-2v-1.705c0-.386-.23-.728-.543-.953a3.501 3.501 0 1 1 5.28-4.176c.19.46.597.834 1.095.834h6.336c.498 0 .905-.374 1.095-.835A3.501 3.501 0 0 1 19.5 11Z"
      fill={color}
    />
  </Svg>
);
export default Couch;
