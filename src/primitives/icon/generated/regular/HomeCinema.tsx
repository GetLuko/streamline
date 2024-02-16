/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeCinema = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM7 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4Zm2.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
    <Path d="M17.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1v.293a.707.707 0 0 1-1.207.5L20 21h-5l-.793.793a.707.707 0 0 1-1.207-.5V21a1 1 0 0 1-1-1v-7Zm9 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM13.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
  </Svg>
);
export default HomeCinema;
