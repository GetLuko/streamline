/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Flashlight = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)" fill={color}>
      <Path d="M18.697.04a.5.5 0 0 1 .263.657l-1.5 3.5a.5.5 0 0 1-.92-.394l1.5-3.5a.5.5 0 0 1 .657-.262ZM21.854 2.147a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 0 1-.708-.707l2.5-2.5a.5.5 0 0 1 .708 0ZM23.697 5.96a.5.5 0 0 0-.394-.92l-3.5 1.5a.5.5 0 0 0 .394.92l3.5-1.5Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.879 17.879 8.5 11.256a1.73 1.73 0 0 0 .507-1.09c.056-.743.113-1.491.408-2.166A5.001 5.001 0 1 1 16 14.584c-.675.295-1.423.352-2.166.408a1.73 1.73 0 0 0-1.09.507L6.12 22.121A3 3 0 1 1 1.88 17.88ZM16.894 7.106c.988.988 1.388 2.189.895 2.682-.494.494-1.696.094-2.683-.894-.988-.988-1.388-2.189-.895-2.682.494-.494 1.695-.094 2.683.894Zm-6.687 8.101a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l2-2Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Flashlight;
