/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Bomb = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.405.252a.452.452 0 0 0-.81 0l-.886 1.795a.452.452 0 0 1-.34.247l-1.982.288a.452.452 0 0 0-.25.771l.632.616c-.48.116-.98.331-1.397.73-.586.559-.872 1.346-.872 2.301 0 .167-.009.325-.025.475l-1.121-1.121a.5.5 0 0 0-.708 0l-1.07 1.07a8 8 0 1 0 5 5l1.07-1.07a.5.5 0 0 0 0-.708l-1.533-1.533A5.614 5.614 0 0 0 16.5 7c0-.545.151-.758.253-.855.127-.121.356-.229.746-.278l.08-.009-.217 1.265c-.063.37.324.651.656.477l1.772-.932a.452.452 0 0 1 .42 0l1.772.932a.452.452 0 0 0 .656-.477l-.339-1.973a.452.452 0 0 1 .13-.4l1.434-1.397a.452.452 0 0 0-.25-.77l-1.982-.289a.452.452 0 0 1-.34-.247L20.405.252ZM5 15a4 4 0 0 1 4-4 1 1 0 1 0 0-2 6 6 0 0 0-6 6 1 1 0 1 0 2 0Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Bomb;
