/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Mortgage = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9 4V1.497a.5.5 0 0 1 .854-.353l3.002 3.002a.5.5 0 0 1-.353.854H10a1 1 0 0 1-1-1Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9.5A1.5 1.5 0 0 1 8 4.5V2a1 1 0 0 0-1-1H4Zm3.667 6.108L4.12 9.972c-.227.164-.113.529.165.529H4.5a.5.5 0 0 1 .5.5V14h2v-2.333c0-.322.261-.583.583-.583h.834c.322 0 .583.261.583.583V14h2v-3a.5.5 0 0 1 .5-.499h.214c.278 0 .392-.365.165-.53L8.33 7.109a.562.562 0 0 0-.662 0Z"
      fill={color}
    />
  </Svg>
);
export default Mortgage;
