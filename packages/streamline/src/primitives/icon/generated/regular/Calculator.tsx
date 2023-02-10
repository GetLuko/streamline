/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Calculator = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Zm1 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7Zm1 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Z"
      fill={color}
    />
  </Svg>
);
export default Calculator;
