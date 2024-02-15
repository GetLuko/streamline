/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Car = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.86 5.596A4 4 0 0 1 7.605 3h8.456a4 4 0 0 1 3.745 2.596L21.083 9h.75a1 1 0 1 1 0 2h-.166c.11.597.166 1.204.166 1.813V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2h-12v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7.187A10 10 0 0 1 1.999 11h-.166a1 1 0 1 1 0-2h.75L3.86 5.596ZM6.833 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm.25-5c.533 0 .928-.497.74-.996l-1.39-3.706A2 2 0 0 0 16.062 5H7.605a2 2 0 0 0-1.873 1.298l-1.39 3.706c-.186.499.208.996.74.996h13.502Zm-9.25 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
      fill={color}
    />
  </Svg>
);
export default Car;
