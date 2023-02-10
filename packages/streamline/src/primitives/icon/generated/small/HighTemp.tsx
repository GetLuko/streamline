/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HighTemp = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.5 3.5a.5.5 0 0 0-1 0v5.878c0 .424-.296.782-.588 1.089a1.5 1.5 0 1 0 2.175 0c-.291-.307-.587-.665-.587-1.089V3.5Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1a2.5 2.5 0 0 0-2.5 2.5v5.55a3.5 3.5 0 1 0 5 0V8h1a.5.5 0 0 0 0-1h-1V6h1a.5.5 0 0 0 0-1h-1V4h1a.5.5 0 0 0 0-1h-1.05A2.5 2.5 0 0 0 8 1Zm1.5 8c0 .315.158.603.367.837a2.5 2.5 0 1 1-3.734 0c.21-.234.367-.522.367-.837V3.5a1.5 1.5 0 1 1 3 0V9Z"
      fill={color}
    />
  </Svg>
);
export default HighTemp;
