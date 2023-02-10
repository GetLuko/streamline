/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ekg = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.646 3.323c-.712.092-1.28.601-1.397 1.31C1.124 5.382 1 6.504 1 8c0 1.495.124 2.618.249 3.368.117.708.685 1.217 1.397 1.31C3.751 12.82 5.607 13 8 13c2.393 0 4.249-.179 5.354-.323.712-.092 1.28-.601 1.397-1.31.125-.75.249-1.872.249-3.367 0-1.495-.124-2.618-.249-3.368-.117-.708-.685-1.217-1.397-1.31A42.06 42.06 0 0 0 8 3a42.06 42.06 0 0 0-5.354.323Zm4.818 1.991a.5.5 0 0 0-.893-.071L5.217 7.5H3.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .429-.243l.981-1.635 1.626 4.064a.5.5 0 0 0 .893.071L10.783 8.5H12.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.429.243L9.09 9.378 7.464 5.314Z"
      fill={color}
    />
  </Svg>
);
export default Ekg;
