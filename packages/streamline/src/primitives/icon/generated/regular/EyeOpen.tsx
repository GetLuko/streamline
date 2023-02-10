/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeOpen = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.53 10.825c.627.67.627 1.68 0 2.35C20.663 15.17 16.495 19 12 19c-4.497 0-8.664-3.83-10.53-5.825a1.702 1.702 0 0 1 0-2.35C3.337 8.83 7.504 5 12 5c4.497 0 8.664 3.83 10.53 5.825ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      fill={color}
    />
  </Svg>
);
export default EyeOpen;
