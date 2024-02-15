/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Balance = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 6.712c0-.456.329-.835.695-1.108C9.684 5.24 10 4.657 10 4h1.793c-.67 1.897-1.705 4.839-1.705 4.839a2.5 2.5 0 1 0 4.823 0s-1.31-3.726-1.936-5.495l-.001-.004A.497.497 0 0 0 12.5 3H9.732a2 2 0 0 0-3.464 0H3.5a.5.5 0 0 0-.475.344C2.399 5.114 1.088 8.84 1.088 8.84A2.503 2.503 0 0 0 3.5 12a2.5 2.5 0 0 0 2.412-3.161L4.207 4H6c0 .657.316 1.24.805 1.604.366.273.695.652.695 1.108V13a1 1 0 0 1-1 1h-1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-1a1 1 0 0 1-1-1V6.712Zm-5-1.711c-.02.049-1.25 3.064-1.25 3.749a1.25 1.25 0 1 0 2.5 0c0-.685-1.23-3.7-1.25-3.75Zm9 0c-.02.049-1.25 3.064-1.25 3.749a1.25 1.25 0 1 0 2.5 0c0-.685-1.23-3.7-1.25-3.75Z"
      fill={color}
    />
  </Svg>
);
export default Balance;
