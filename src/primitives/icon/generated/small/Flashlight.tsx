/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Flashlight = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)" fill={color}>
      <Path d="M12.724.053a.5.5 0 0 1 .223.67l-1 2a.5.5 0 1 1-.894-.447l1-2a.5.5 0 0 1 .67-.223ZM14.854 1.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0ZM15.947 3.276a.5.5 0 0 1-.223.671l-2 1a.5.5 0 1 1-.448-.894l2-1a.5.5 0 0 1 .671.223Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.5a3.5 3.5 0 0 1-3.599 3.499c-.327-.01-.656.084-.887.316l-4.1 4.1a2 2 0 0 1-2.828-2.83l4.1-4.099c.23-.231.324-.56.315-.887L5 7.5a3.5 3.5 0 1 1 7 0Zm-6.146 3.354a.5.5 0 1 0-.708-.708l-1 1a.5.5 0 1 0 .708.707l1-1Zm4.478-5.186c.69.69.875 1.62.416 2.08-.46.46-1.39.273-2.08-.416-.69-.69-.875-1.62-.416-2.08.46-.46 1.39-.273 2.08.416Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Flashlight;
