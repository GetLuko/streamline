/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Star = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7.388 1.37c.25-.493.973-.493 1.224 0l1.634 3.217c.1.196.292.331.514.363l3.655.516c.56.079.783.747.378 1.13L12.148 9.1a.651.651 0 0 0-.196.586l.624 3.537c.096.541-.489.954-.989.698l-3.27-1.67a.7.7 0 0 0-.634 0l-3.27 1.67c-.5.256-1.085-.157-.99-.698l.625-3.537a.65.65 0 0 0-.196-.586L1.207 6.596c-.405-.383-.182-1.051.378-1.13L5.24 4.95a.68.68 0 0 0 .514-.363L7.388 1.37Z"
      fill={color}
    />
  </Svg>
);
export default Star;
