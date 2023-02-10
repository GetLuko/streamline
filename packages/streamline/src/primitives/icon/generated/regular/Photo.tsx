/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Photo = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.586 3.586A2 2 0 0 0 13.172 3h-2.344a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 7.172 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.172a2 2 0 0 1-1.414-.586l-.828-.828ZM18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm2-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={color}
    />
    <Path d="M5 3a1 1 0 0 1 1 1H4a1 1 0 0 1 1-1Z" fill={color} />
  </Svg>
);
export default Photo;
