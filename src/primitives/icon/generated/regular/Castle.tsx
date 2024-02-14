/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Castle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 2a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2.086a1 1 0 0 1-.293.707l-.414.414A1 1 0 0 0 8 6.414V8h1.5a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5H16V6.414a1 1 0 0 0-.293-.707l-.414-.414A1 1 0 0 1 15 4.586V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2.086a1 1 0 0 1-.293.707l-.414.414a1 1 0 0 0-.293.707V22h-8v-4a2 2 0 1 0-4 0v4H2V6.414a1 1 0 0 0-.293-.707l-.414-.414A1 1 0 0 1 1 4.586V2.5a.5.5 0 0 1 .5-.5h1ZM5 6a1 1 0 0 0-1 1v2h2V7a1 1 0 0 0-1-1Zm-1 6a1 1 0 1 1 2 0v2H4v-2Zm1 4a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1Zm13-9a1 1 0 1 1 2 0v2h-2V7Zm1 4a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1Zm-1 6a1 1 0 1 1 2 0v2h-2v-2Zm-5-5a1 1 0 1 1 2 0v2h-2v-2Zm-3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Castle;
