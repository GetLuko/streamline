/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Avalanche = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2 2.497V13.5a.5.5 0 0 0 .5.5h11.003a.5.5 0 0 0 .353-.854l-.594-.594a2 2 0 0 1-3.07-.698c-.041-.085-.08-.171-.119-.258-.162-.362-.326-.728-.604-1.006L5.453 6.575A1.498 1.498 0 0 1 5 5.5v-.043c0-.547 0-1.166-.383-1.55L2.854 2.144A.5.5 0 0 0 2 2.497ZM8.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM10.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
    <Path
      d="M6.013 5.385a.497.497 0 0 1 .602-.372.497.497 0 0 1 .081.027l2.492.997c.464.185.983.113 1.5.04.274-.039.547-.077.812-.077a1.5 1.5 0 0 1 1.416 1.003L13 7a1 1 0 0 1 .746 1.665 1.5 1.5 0 0 1-.75 2.25A1 1 0 1 1 11 11c0-.161-.037-.329-.151-.443L6.155 5.862a.5.5 0 0 1-.142-.477Z"
      fill={color}
    />
  </Svg>
);
export default Avalanche;
