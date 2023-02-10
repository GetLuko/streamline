/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Condition = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.088 2.533a1.5 1.5 0 1 0-2.175 0c.291.307.587.665.587 1.089v2.075a1 1 0 0 1-.445.832l-1.96 1.307a1 1 0 0 1-.555.168h-.666A2 2 0 0 0 2 10v2.378c0 .424-.296.782-.588 1.089a1.5 1.5 0 1 0 2.175 0C3.297 13.16 3 12.802 3 12.378V10a1 1 0 0 1 .893-.994h.661a1 1 0 0 1 .555.168l1.782 1.187a2 2 0 0 0 2.218 0l1.782-1.187a1 1 0 0 1 .555-.168h.66A1 1 0 0 1 13 10v2.378c0 .424-.296.782-.588 1.089a1.5 1.5 0 1 0 2.175 0c-.291-.307-.587-.665-.587-1.089V10a2 2 0 0 0-1.874-1.996h-.666a1 1 0 0 1-.555-.168l-1.96-1.307a1 1 0 0 1-.445-.832V3.622c0-.424.296-.782.588-1.089Zm-.533 6.996a1 1 0 0 1-1.11 0l-1.232-.821a.25.25 0 0 1 0-.416l1.232-.821a1 1 0 0 1 1.11 0l1.232.821a.25.25 0 0 1 0 .416l-1.232.821Z"
      fill={color}
    />
  </Svg>
);
export default Condition;
