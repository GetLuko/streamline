/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AddUser = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 6.5c0 3.038-2.239 6.5-5 6.5S5 9.538 5 6.5 7.239 1 10 1s5 2.462 5 5.5ZM10 14c-4.97 0-9 2.462-9 5.5A1.5 1.5 0 0 0 2.5 21h7.591c.735 0 1.229-.776 1.072-1.494a7.026 7.026 0 0 1 .278-3.956c.255-.684-.12-1.51-.85-1.538A14.811 14.811 0 0 0 10 14Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 18a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-4.5-2.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2Z"
      fill={color}
    />
  </Svg>
);
export default AddUser;
