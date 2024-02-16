/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Send = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.45 12.894 4.447 21.887A1 1 0 0 1 3 20.993v-7.05a1 1 0 0 1 .941-.998L21 12l-17.059-.945A1 1 0 0 1 3 10.057V2.998a1 1 0 0 1 1.447-.894l18.003 9.001a1 1 0 0 1 0 1.79Z"
      fill={color}
    />
  </Svg>
);
export default Send;
