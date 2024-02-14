/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Castle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 1a.5.5 0 0 0-.5.5v1.086a1 1 0 0 0 .293.707l.414.414A1 1 0 0 1 2 4.414V15h4.5v-2.5a1.5 1.5 0 0 1 3 0V15H14V4.414a1 1 0 0 1 .293-.707l.414-.414A1 1 0 0 0 15 2.586V1.5a.5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0v1.086a1 1 0 0 0 .293.707l.414.414a1 1 0 0 1 .293.707V6h-.5a.5.5 0 0 0-.5.5.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5H5V4.414a1 1 0 0 1 .293-.707l.414-.414A1 1 0 0 0 6 2.586V1.5a.5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5ZM3 5.5a.5.5 0 0 1 1 0V7H3V5.5Zm9.5-.5a.5.5 0 0 0-.5.5V7h1V5.5a.5.5 0 0 0-.5-.5ZM3 8.5a.5.5 0 0 1 1 0V10H3V8.5ZM6.5 8a.5.5 0 0 0-.5.5V10h1V8.5a.5.5 0 0 0-.5-.5Zm2.5.5a.5.5 0 0 1 1 0V10H9V8.5Zm3.5-.5a.5.5 0 0 0-.5.5V10h1V8.5a.5.5 0 0 0-.5-.5ZM3 11.5a.5.5 0 0 1 1 0V13H3v-1.5Zm9.5-.5a.5.5 0 0 0-.5.5V13h1v-1.5a.5.5 0 0 0-.5-.5Z"
      fill={color}
    />
  </Svg>
);
export default Castle;
