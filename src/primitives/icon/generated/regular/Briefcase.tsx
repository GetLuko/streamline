/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Briefcase = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2a3 3 0 0 1 3 3v1h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V5a3 3 0 0 1 3-3h4Zm1 3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6V5Z"
      fill={color}
    />
  </Svg>
);
export default Briefcase;
