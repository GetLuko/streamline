/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ring = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.735 1h2.53a.5.5 0 0 1 .385.18l1.233 1.487a.5.5 0 0 1-.013.654l-.485.537A2.49 2.49 0 0 1 11 5.5V6a5 5 0 1 1-6 0v-.5c0-.628.232-1.203.615-1.642l-.485-.537a.5.5 0 0 1-.013-.654L6.35 1.18A.5.5 0 0 1 6.735 1Zm-.733 4.415c.017-.3.123-.578.291-.806l.488.54a4.963 4.963 0 0 0-.779.266Zm3.996 0a1.492 1.492 0 0 0-.291-.806l-.488.54c.269.068.53.157.779.266Zm-2.429.608a4 4 0 1 0 .863 7.954 4 4 0 0 0-.863-7.954Z"
      fill={color}
    />
  </Svg>
);
export default Ring;
