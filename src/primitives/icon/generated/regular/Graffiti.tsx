/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Graffiti = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.992 2.174A2 2 0 0 0 16.8.4c-.394.297-.718.698-1.041 1.099-.421.522-.841 1.043-1.416 1.33L12 4l2.342 1.17c.574.288.995.81 1.416 1.331.323.4.647.802 1.041 1.099a2 2 0 0 0 3.184-1.858 2 2 0 0 0 0-3.484l.01-.084ZM8 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V5a2 2 0 0 1 2 2 1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1 2 2 0 0 1 2-2V3.5Z"
      fill={color}
    />
  </Svg>
);
export default Graffiti;
