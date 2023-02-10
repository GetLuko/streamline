/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Power = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m9.118 6.405.902-4.737c.113-.593-.66-.921-1.008-.428L4.096 8.212a.5.5 0 0 0 .409.789h1.893a.5.5 0 0 1 .491.594l-.902 4.737c-.113.593.66.921 1.008.428l4.916-6.972a.5.5 0 0 0-.409-.79H9.61a.5.5 0 0 1-.491-.593Z"
      fill={color}
    />
  </Svg>
);
export default Power;
