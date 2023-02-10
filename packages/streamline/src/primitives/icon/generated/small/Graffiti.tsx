/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Graffiti = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M12 4a1 1 0 0 0 1-1 1 1 0 1 0 0-2 1 1 0 0 0-1-1c-.574 0-1.012.451-1.454.907-.3.31-.603.621-.951.796L9 2l.595.297c.348.175.65.486.95.796.443.456.881.907 1.455.907ZM6.5 1a.5.5 0 0 0-.5.5V3h-.5a1 1 0 0 0-1 1 .5.5 0 0 0-.5.5V14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.5-.5 1 1 0 0 0-1-1H7V1.5a.5.5 0 0 0-.5-.5Z"
      fill={color}
    />
  </Svg>
);
export default Graffiti;
