/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Alarm = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.972 3.777a1 1 0 1 0-1.258-1.554A9.983 9.983 0 0 0 2 10c0 .762.085 1.506.248 2.221a1 1 0 1 0 1.95-.442A8.028 8.028 0 0 1 4 10a7.983 7.983 0 0 1 2.972-6.223ZM18.286 2.223a1 1 0 0 0-1.258 1.554A7.983 7.983 0 0 1 20 10c0 .613-.069 1.208-.198 1.779a1 1 0 1 0 1.95.442A10.03 10.03 0 0 0 22 10a9.983 9.983 0 0 0-3.714-7.777Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5a6 6 0 0 1 12 0Zm-5-4a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3Z"
      fill={color}
    />
    <Path
      d="M7 18a3 3 0 0 0-3 3 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 3 3 0 0 0-3-3H7Z"
      fill={color}
    />
  </Svg>
);
export default Alarm;
