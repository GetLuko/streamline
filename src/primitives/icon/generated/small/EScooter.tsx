/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const EScooter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1c0 .306-.137.58-.353.763l.845 6.648a.5.5 0 0 1 .581.402l.6 3.303a2 2 0 1 1-1.967.359l-.07-.383v-.003c-.063-.338-.442-.509-.693-.273A2.992 2.992 0 0 0 11 14a1.5 1.5 0 0 1-1.5 1.5H3.323a2 2 0 1 1 .614-2h6.094c.157-1.26.9-2.339 1.95-2.953a.545.545 0 0 0 .273-.558v-.002l-.148-.816a.5.5 0 0 1 .402-.582l-.845-6.647A1 1 0 1 1 13 1ZM2 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EScooter;
