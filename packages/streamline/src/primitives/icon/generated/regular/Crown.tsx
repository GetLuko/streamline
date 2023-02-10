/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crown = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.814 4.419a1 1 0 0 0-1.628 0L6.8 10.559 2.625 7.22a1 1 0 0 0-1.6 1.003l2.5 11A1 1 0 0 0 4.5 20h15a1 1 0 0 0 .975-.778l2.5-11a1 1 0 0 0-1.6-1.003L17.2 10.56l-4.386-6.14Z"
      fill={color}
    />
  </Svg>
);
export default Crown;
