/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ThumbDown = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16 13V6.606c0-1.004-.499-1.952-1.414-2.362C13.219 3.633 11.204 3 9 3c-5 0-6.143.428-6.5 1.5C2.167 5.5 3 6 3 6S1.5 6 1.5 8c0 .75.5 1 .5 1s-1 0-1 1.5S2 12 2 12s-.5.303-.5 1.5 1.363 2.5 7 2.5c-.357.952-.5 2-.5 3 0 3 1.857 5 3 5 .855 0 1.426-1 1.185-1.82-.31-1.061-.433-2.433.315-3.68.574-.957 1.222-1.621 1.802-2.216C15.238 15.324 16 14.543 16 13ZM20.558 16c.861 0 1.625-.55 1.828-1.387.282-1.155.614-2.884.614-4.613 0-1.73-.332-3.458-.614-4.613C22.183 4.551 21.42 4 20.558 4H19a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.558Z"
      fill={color}
    />
  </Svg>
);
export default ThumbDown;
