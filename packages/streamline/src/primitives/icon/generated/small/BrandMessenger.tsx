/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandMessenger = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1C4.056 1 1 3.889 1 7.79c0 2.041.837 3.804 2.199 5.023a.564.564 0 0 1 .188.398l.038 1.245a.561.561 0 0 0 .786.496L5.6 14.34a.559.559 0 0 1 .373-.029c.638.177 1.319.27 2.027.27 3.944 0 7-2.89 7-6.79C15 3.888 11.944 1 8 1Zm4.203 5.224-2.056 3.262a1.051 1.051 0 0 1-1.519.28L6.993 8.54a.42.42 0 0 0-.506 0L4.28 10.218c-.294.224-.68-.13-.482-.442l2.057-3.262a1.051 1.051 0 0 1 1.518-.28l1.635 1.226a.42.42 0 0 0 .506-.001l2.208-1.676c.294-.224.68.13.482.442Z"
      fill="#fff"
    />
  </Svg>
);
export default BrandMessenger;
