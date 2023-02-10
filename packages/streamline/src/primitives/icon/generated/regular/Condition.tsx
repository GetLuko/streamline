/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Condition = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.561 5.317c-.278.5-.561 1.009-.561 1.569v1.685L17.25 11H19a2 2 0 0 1 2 2v4.114c0 .56.283 1.069.561 1.569.076.137.152.273.222.41a2 2 0 1 1-3.566 0c.07-.137.146-.273.222-.41.278-.5.561-1.009.561-1.569V14a1 1 0 0 0-1-1h-.75l-4.258 2.433a2 2 0 0 1-1.984 0L6.75 13H6a1 1 0 0 0-1 1v3.114c0 .56.283 1.069.561 1.569.076.137.152.273.222.41a2 2 0 1 1-3.566 0c.07-.137.146-.273.222-.41.278-.5.561-1.009.561-1.569V13a2 2 0 0 1 2-2h1.75L11 8.571V6.886c0-.56-.283-1.069-.561-1.569-.076-.137-.152-.273-.222-.41a2 2 0 1 1 3.566 0c-.07.137-.146.273-.222.41Zm-3.77 6.249a.5.5 0 0 0 0 .868l1.713.979a1 1 0 0 0 .992 0l1.713-.979a.5.5 0 0 0 0-.868l-1.713-.979a1 1 0 0 0-.992 0l-1.713.979Z"
      fill={color}
    />
  </Svg>
);
export default Condition;
