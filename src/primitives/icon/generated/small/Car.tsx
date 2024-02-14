/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Car = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.246 3.886A3 3 0 0 1 5.03 2h5.938a3 3 0 0 1 2.785 1.886l.817 2.041L14.6 6h.9a.5.5 0 1 1 0 1c-.317 0-.554.29-.525.606.017.182.025.366.025.55V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V12H4v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V8.155c0-.183.008-.367.025-.55C1.055 7.29.817 7 .5 7a.5.5 0 1 1 0-1h.9l.03-.073.816-2.041ZM2.872 7c-.379 0-.655-.35-.515-.701l.817-2.042A2 2 0 0 1 5.031 3h5.938a2 2 0 0 1 1.857 1.257l.817 2.042c.14.351-.136.701-.515.701H2.872ZM5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5ZM3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm11-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={color}
    />
  </Svg>
);
export default Car;
