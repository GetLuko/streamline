/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Piano = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM21 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm.5 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm14.5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 10a1 1 0 0 1 1-1h1v9H4a1 1 0 0 1-1-1v-7Zm3 8h2v-4a.5.5 0 0 1-.5-.5V9H6v9Zm3 0v-4a.5.5 0 0 0 .5-.5V9H11v4.5a.5.5 0 0 0 .5.5v4H9Zm3.5 0H15v-4a.5.5 0 0 1-.5-.5V9H13v4.5a.5.5 0 0 1-.5.5v4Zm7.5 0a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1v9h1Zm-3.5-9H18v9h-2v-4a.5.5 0 0 0 .5-.5V9Z"
      fill={color}
    />
  </Svg>
);
export default Piano;
