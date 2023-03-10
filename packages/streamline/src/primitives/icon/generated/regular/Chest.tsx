/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Chest = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M1.005 6.934c-.044-.592.19-1.163.726-1.419C2.97 4.923 5.882 4 12 4c6.117 0 9.03.923 10.268 1.515.536.256.77.827.726 1.419l-.011.142a1 1 0 0 1-.997.924H2.013a1 1 0 0 1-.997-.924l-.01-.142ZM2.316 10a1 1 0 0 0-.997 1.075l.27 3.558c.016.21.2.367.411.367a5 5 0 0 1 4.975 4.5c.028.276.249.5.525.5h9a.541.541 0 0 0 .525-.5A5 5 0 0 1 22 15a.407.407 0 0 0 .412-.367l.269-3.557A1 1 0 0 0 21.684 10H15a1 1 0 0 0-1 1 2 2 0 1 1-4 0 1 1 0 0 0-1-1H2.316ZM21.732 17.013c.275-.026.483.219.462.494l-.049.644A2 2 0 0 1 20.15 20h-.65c-.276 0-.504-.226-.457-.498a3.05 3.05 0 0 1 2.69-2.489ZM4.957 19.502c.047.272-.18.498-.457.498h-.65a2 2 0 0 1-1.995-1.849l-.049-.644c-.02-.275.187-.52.462-.494a3.05 3.05 0 0 1 2.69 2.49Z"
      fill={color}
    />
    <Path d="M11 10a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Z" fill={color} />
  </Svg>
);
export default Chest;
