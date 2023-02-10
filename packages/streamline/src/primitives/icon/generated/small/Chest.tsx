/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Chest = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M1.314 4.036C2.211 3.677 4.741 3 8 3c3.26 0 5.79.677 6.686 1.036A.5.5 0 0 1 14.5 5h-13a.5.5 0 0 1-.186-.964ZM1.75 6a.5.5 0 0 0-.496.562l.393 3.142A.35.35 0 0 0 2 10a3 3 0 0 1 2.959 2.502c.045.272.265.498.541.498h5c.276 0 .496-.226.541-.498A3 3 0 0 1 14 10a.35.35 0 0 0 .353-.296l.393-3.142A.5.5 0 0 0 14.25 6H10a.5.5 0 0 0-.5.5v1a1.5 1.5 0 1 1-3 0v-1A.5.5 0 0 0 6 6H1.75Z"
      fill={color}
    />
    <Path
      d="M8 8a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-1 0v1A.5.5 0 0 0 8 8ZM3.938 12.505c.068.268-.162.495-.438.495h-1a.5.5 0 0 1-.496-.438l-.17-1.364A.172.172 0 0 1 2 11a2 2 0 0 1 1.938 1.505ZM14.167 11.198A.172.172 0 0 0 14 11a2 2 0 0 0-1.938 1.505c-.068.268.162.495.438.495h1a.5.5 0 0 0 .496-.438l.17-1.364Z"
      fill={color}
    />
  </Svg>
);
export default Chest;
