/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Unstar = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.854 1.854a.5.5 0 0 0-.708-.708L10.46 4.832a.668.668 0 0 1-.214-.245L8.612 1.37c-.25-.492-.973-.492-1.224 0L5.754 4.587a.68.68 0 0 1-.514.363l-3.655.516c-.56.079-.783.747-.378 1.13L3.852 9.1a.65.65 0 0 1 .196.586l-.334 1.892-2.568 2.567a.5.5 0 0 0 .708.708l13-13ZM12.873 5.248 4.122 14a.697.697 0 0 0 .291-.078l3.27-1.67a.7.7 0 0 1 .634 0l3.27 1.67c.5.256 1.085-.157.99-.698l-.625-3.537a.651.651 0 0 1 .196-.586l2.645-2.505c.405-.383.182-1.051-.378-1.13l-1.542-.218Z"
      fill={color}
    />
  </Svg>
);
export default Unstar;
