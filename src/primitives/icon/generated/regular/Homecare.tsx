/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Homecare = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.388 1.214 1.196 9.104a.5.5 0 0 0 .306.896H3a1 1 0 0 1 1 1v10h16V11a1 1 0 0 1 1-1h1.497a.5.5 0 0 0 .306-.895l-10.19-7.89a1 1 0 0 0-1.225 0ZM12 9.944A3.222 3.222 0 1 0 7.444 14.5l4.196 4.347a.5.5 0 0 0 .72 0l4.196-4.347A3.222 3.222 0 1 0 12 9.944Z"
      fill={color}
    />
  </Svg>
);
export default Homecare;
