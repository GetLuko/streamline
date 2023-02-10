/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Megaphone = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M1 6.997a2 2 0 0 1 2-2h2.23a2 2 0 0 0 1.341-.518L9.164 2.13a.5.5 0 0 1 .836.371v11.003a.5.5 0 0 1-.836.37l-2.592-2.356a1.923 1.923 0 0 0-.935-.462c-.319-.065-.56.248-.482.564l.681 2.725a.527.527 0 0 1-.982.364l-1.578-3.157c-.169-.34-.524-.533-.884-.648A2.002 2.002 0 0 1 1 8.998V6.997ZM11.055 2.867a.5.5 0 0 1 .673-.217A6.002 6.002 0 0 1 15 7.997a6.002 6.002 0 0 1-3.272 5.348.5.5 0 1 1-.456-.89A5.002 5.002 0 0 0 14 7.996a5.002 5.002 0 0 0-2.728-4.456.5.5 0 0 1-.217-.674Z"
      fill={color}
    />
    <Path
      d="M11.786 5.126C11.471 4.82 11 5.08 11 5.519v4.95c0 .44.471.7.786.394A3.984 3.984 0 0 0 13 7.994a3.985 3.985 0 0 0-1.214-2.868Z"
      fill={color}
    />
  </Svg>
);
export default Megaphone;
