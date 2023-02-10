/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AddDocument = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.503 7H15a1 1 0 0 1-1-1V1.497a.5.5 0 0 1 .854-.353l5.002 5.002a.5.5 0 0 1-.353.854Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a1 1 0 0 0-1-1h-4a3 3 0 0 1-3-3V2a1 1 0 0 0-1-1H6Zm5 10a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3Z"
      fill={color}
    />
  </Svg>
);
export default AddDocument;
