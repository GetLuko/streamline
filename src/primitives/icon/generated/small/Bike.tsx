/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bike = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.167 5H4.5a.5.5 0 0 1 0-1h.988a.48.48 0 0 1 .023 0H6.5a.5.5 0 0 1 0 1h-.25l.417 1H9.69l-.5-1H8.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .447.276l1.905 3.809A2.503 2.503 0 0 1 15 10.5a2.5 2.5 0 1 1-4.043-1.967l-.506-1.012-2.024 3.239a.498.498 0 0 1-.225.197l-.01.004A.497.497 0 0 1 7.99 11H5.95a2.5 2.5 0 1 1-1.575-2.843l1.201-1.922a.5.5 0 0 1 .069-.087L5.167 5ZM11 10.5c0-.404.16-.772.42-1.041l.633 1.265a.5.5 0 1 0 .894-.448l-.632-1.265A1.5 1.5 0 1 1 11 10.5ZM6.11 7.266l-.888 1.422c.364.346.624.8.728 1.312h1.3L6.11 7.266Zm1.98 2.148L7.082 7h2.515L8.089 9.414ZM4.914 10a1.497 1.497 0 0 0-.241-.434L4.402 10h.513Zm-1.839.235.75-1.2A1.5 1.5 0 1 0 4.915 11H3.5a.5.5 0 0 1-.424-.765Z"
      fill={color}
    />
  </Svg>
);
export default Bike;
