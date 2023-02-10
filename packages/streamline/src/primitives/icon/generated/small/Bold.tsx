/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bold = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M10.4 7.335c.722-.526 1.228-1.39 1.228-2.192C11.628 3.367 10.326 2 8.65 2H4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4.74c1.554 0 2.76-1.336 2.76-2.978 0-1.194-.64-2.216-1.6-2.687Zm-4.167-3.37h2.232c.618 0 1.116.526 1.116 1.178 0 .652-.498 1.178-1.116 1.178H6.233V3.964Zm2.604 7.07H6.233V8.68h2.604c.618 0 1.116.526 1.116 1.178 0 .652-.498 1.179-1.116 1.179Z"
      fill={color}
    />
  </Svg>
);
export default Bold;
