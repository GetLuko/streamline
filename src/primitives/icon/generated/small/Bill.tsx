/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bill = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.306.076A.17.17 0 0 0 3 .178v14.325a.5.5 0 0 0 .1.3l.75.997a.5.5 0 0 0 .8 0l.45-.6a.5.5 0 0 1 .8 0l.45.6a.5.5 0 0 0 .8 0l.45-.6a.5.5 0 0 1 .8 0l.45.6a.5.5 0 0 0 .8 0l.45-.6a.5.5 0 0 1 .8 0l.45.6a.5.5 0 0 0 .8 0l.75-.996a.5.5 0 0 0 .1-.301V.178a.17.17 0 0 0-.306-.102L12.15.8a.5.5 0 0 1-.798 0l-.452-.6a.5.5 0 0 0-.798 0l-.452.6a.5.5 0 0 1-.798 0L8.399.2a.5.5 0 0 0-.798 0l-.452.6a.5.5 0 0 1-.798 0L5.899.2a.5.5 0 0 0-.798 0l-.452.6a.5.5 0 0 1-.798 0L3.306.076ZM4.5 5a.5.5 0 1 0 0 1h7a.5.5 0 1 0 0-1h-7ZM4 7.5a.5.5 0 0 1 .5-.5h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1-.5-.5ZM4.5 9a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"
      fill={color}
    />
  </Svg>
);
export default Bill;
