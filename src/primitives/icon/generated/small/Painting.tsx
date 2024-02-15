/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Painting = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.7 1.1a.5.5 0 0 1 .6 0L10.833 3H14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3.167L7.7 1.1Zm3.444 3.383a1 1 0 1 1 1.711 1.033 1 1 0 0 1-1.711-1.033ZM8 2.125 9.167 3H6.833L8 2.125Zm-6 8.04V11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-.806a.5.5 0 0 0-.131-.337l-2.462-2.692a.5.5 0 0 0-.769.038L9.436 8.808a.5.5 0 0 1-.823-.034L6.389 5.238a.5.5 0 0 0-.825-.032L2.1 9.867a.5.5 0 0 0-.099.298Z"
      fill={color}
    />
  </Svg>
);
export default Painting;
