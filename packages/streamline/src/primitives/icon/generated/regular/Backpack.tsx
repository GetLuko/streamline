/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Backpack = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.17 21A3 3 0 0 0 7 23h10a3 3 0 0 0 2.83-2H21a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2v-4a8.002 8.002 0 0 0-5.03-7.43 3.001 3.001 0 0 0-5.938 0A8.003 8.003 0 0 0 3.999 10v4a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h1.17Zm9.553-19.016.04.07.032.064.02.041.024.053a8.023 8.023 0 0 0-3.678 0 2 2 0 0 1 3.562-.228ZM18 10a6 6 0 0 0-12 0 1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 12h2v5a1 1 0 1 1-2 0v-5Zm8 0h-2v5a1 1 0 1 0 2 0v-5Z"
      fill={color}
    />
  </Svg>
);
export default Backpack;
