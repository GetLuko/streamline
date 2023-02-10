/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Image = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm14.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3.74 5.014L8.8 8.397a1 1 0 0 0-1.6 0l-4 5.336a1 1 0 0 0-.2.6V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-.62a1 1 0 0 0-.253-.664l-3.014-3.383a1 1 0 0 0-1.481-.014l-2.491 2.695Z"
      fill={color}
    />
  </Svg>
);
export default Image;
