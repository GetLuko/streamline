/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AddDocument = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9 4V1.497a.5.5 0 0 1 .854-.353l3.002 3.002a.5.5 0 0 1-.353.854H10a1 1 0 0 1-1-1Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9.5A1.5 1.5 0 0 1 8 4.5V2a1 1 0 0 0-1-1H4Zm4 6a.5.5 0 0 0-.5.5v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2A.5.5 0 0 0 8 7Z"
      fill={color}
    />
  </Svg>
);
export default AddDocument;
