/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Assistant = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.5 2.5a.5.5 0 0 0-1 0 .607.607 0 0 1-.516.586 6.004 6.004 0 0 0-4.94 5.177c-.025.21-.148.399-.271.586-.137.207-.273.414-.273.651a.5.5 0 0 0 .5.5h5.5v1H3.707c-.453 0-.887.18-1.207.5l-.18.18c-.205.205-.483.32-.773.32H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-.047c-.29 0-.568-.115-.773-.32l-.18-.18c-.32-.32-.754-.5-1.207-.5H8.5v-1H14a.5.5 0 0 0 .5-.5c0-.237-.136-.444-.273-.651-.123-.187-.246-.375-.272-.586a6.004 6.004 0 0 0-4.939-5.177A.607.607 0 0 1 8.5 2.5Z"
      fill={color}
    />
  </Svg>
);
export default Assistant;
