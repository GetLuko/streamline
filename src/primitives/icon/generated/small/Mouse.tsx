/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Mouse = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.675 7.848a1.27 1.27 0 0 0-.43-.671A3.5 3.5 0 1 1 7.508 2.71.58.58 0 0 0 8 3a.58.58 0 0 0 .492-.29 3.5 3.5 0 1 1 5.262 4.468 1.27 1.27 0 0 0-.43.67c-.214.911-.576 1.892-1.034 2.826.71-.104 1.516-.015 2.407.366a.5.5 0 0 1-.394.92c-1.131-.485-2.022-.372-2.7-.033l-.051.082c.776.071 1.597.433 2.302 1.137a.5.5 0 0 1-.707.708c-.657-.657-1.396-.888-1.994-.855a1.889 1.889 0 0 0-.322.045l-.031.041c.153.067.307.146.457.236.693.415 1.418 1.124 1.718 2.02a.5.5 0 0 1-.95.317c-.2-.603-.724-1.145-1.282-1.48a2.367 2.367 0 0 0-.662-.283C9.389 14.575 8.669 15 7.999 15c-.67 0-1.39-.424-2.082-1.105a2.368 2.368 0 0 0-.66.284c-.557.334-1.081.876-1.283 1.48a.5.5 0 1 1-.948-.317c.299-.897 1.025-1.606 1.717-2.02.15-.09.303-.17.456-.236l-.033-.042a1.881 1.881 0 0 0-.319-.045c-.598-.033-1.337.198-1.993.855a.5.5 0 0 1-.707-.708c.703-.703 1.524-1.065 2.3-1.137a14.368 14.368 0 0 1-.052-.083c-.678-.338-1.568-.45-2.698.034a.5.5 0 1 1-.394-.92c.89-.381 1.696-.47 2.405-.366a13.73 13.73 0 0 1-1.033-2.826Zm10.986-2.09c-.207.356-.686.15-.802-.245a3.508 3.508 0 0 0-2.371-2.372c-.396-.116-.601-.595-.245-.802a2.5 2.5 0 0 1 3.419 3.419Zm-10.46-.245c-.117.395-.596.6-.803.245a2.5 2.5 0 0 1 3.419-3.419c.356.207.15.686-.246.802a3.508 3.508 0 0 0-2.37 2.372ZM6 10c.552 0 1-.672 1-1.5S6.552 7 6 7s-1 .672-1 1.5.448 1.5 1 1.5Zm5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 7 10 7s1 .672 1 1.5Zm-3.965 4.983c.134.255.406.517.965.517.559 0 .831-.262.965-.517.13-.25-.118-.483-.42-.483h-1.09c-.302 0-.55.233-.42.483Z"
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
export default Mouse;