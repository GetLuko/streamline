/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Star = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.039 1.597a1.072 1.072 0 0 1 1.922 0l2.569 5.198c.156.316.458.535.807.585l5.744.834a1.07 1.07 0 0 1 .594 1.825l-4.157 4.047a1.07 1.07 0 0 0-.308.947l.982 5.714c.15.874-.77 1.54-1.555 1.128l-5.138-2.698a1.073 1.073 0 0 0-.998 0l-5.138 2.698c-.786.413-1.705-.254-1.555-1.128l.982-5.714a1.07 1.07 0 0 0-.308-.947l-4.157-4.047a1.07 1.07 0 0 1 .594-1.825l5.744-.834c.35-.05.65-.27.807-.585l2.569-5.198Z"
      fill={color}
    />
  </Svg>
);
export default Star;
