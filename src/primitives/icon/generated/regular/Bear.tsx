/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bear = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 18c1.105 0 2-.948 2-1.5 0-.508-.756-.505-1.736-.5a57.125 57.125 0 0 1-.528 0c-.98-.005-1.736-.008-1.736.5 0 .552.895 1.5 2 1.5Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2c1.117 0 2.149.366 2.981.985.276.206.627.297.964.226a10.043 10.043 0 0 1 4.11 0c.337.07.688-.02.964-.226a5 5 0 0 1 6.996 6.996 1.209 1.209 0 0 0-.226.964c.138.663.211 1.35.211 2.055 0 5.523-4.477 10-10 10S2 18.523 2 13c0-.704.073-1.392.211-2.055.07-.337-.02-.688-.226-.964A5 5 0 0 1 6 2Zm6 18c2.761 0 5-.343 5-2s-2.239-4-5-4-5 2.343-5 4 2.239 2 5 2Zm3.5-7c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2ZM10 11c0 1.105-.672 2-1.5 2S7 12.105 7 11s.672-2 1.5-2 1.5.895 1.5 2ZM6 6a1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3 1 1 0 0 1 0 2Zm13 1a1 1 0 0 0-1-1 1 1 0 1 1 0-2 3 3 0 0 1 3 3 1 1 0 1 1-2 0Z"
      fill={color}
    />
  </Svg>
);
export default Bear;