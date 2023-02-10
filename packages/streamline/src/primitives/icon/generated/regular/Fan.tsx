/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Fan = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 5c0 1.775.7 3.2 1.893 4.481a3.982 3.982 0 0 0-.859 1.995c-.277-.239-.547-.5-.817-.76C5.91 9.45 4.601 8.183 2.437 9.433.01 10.834.492 14.07 1.971 16.63c1.48 2.562 3.866 4.697 6.464 3.197 1.536-.887 2.42-2.204 2.934-3.876a4.031 4.031 0 0 0 2.16-.254c-.067.358-.158.72-.249 1.082-.442 1.766-.884 3.531 1.281 4.781 2.425 1.4 4.985-.634 6.464-3.196 1.48-2.562 2.134-5.696-.464-7.196-1.537-.887-3.12-.993-4.827-.602a4.011 4.011 0 0 0-1.3-1.74c.345-.12.705-.223 1.065-.326C17.25 8 19 7.5 19 5c0-2.8-3.042-4-6-4S7 2 7 5Zm5 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={color}
    />
  </Svg>
);
export default Fan;
