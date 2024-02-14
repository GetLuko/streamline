/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Lotus = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 12c1.105 0 2-1.5 2-3.5C10 6 8.5 3 8 3S6 6 6 8.5c0 2 .895 3.5 2 3.5ZM14 11.5c0-.123-.249-.325-.652-.542-.082.09-.166.178-.251.264-.823.822-1.77 1.403-2.69 1.648a3.747 3.747 0 0 1-.846.128l.161.002C11.667 13 14 11.875 14 11.5ZM2.903 11.222a7.648 7.648 0 0 1-.251-.264c-.403.217-.652.42-.652.542 0 .375 2.333 1.5 4.278 1.5.054 0 .108 0 .161-.002a3.746 3.746 0 0 1-.846-.128c-.92-.245-1.867-.826-2.69-1.648ZM5.536 11.804c-.63-.233-1.304-.668-1.926-1.29C1.795 8.7.707 5.433 1.07 5.07c.168-.169.959-.025 1.94.357.071 1.553.522 3.248 1.243 4.615.33.626.758 1.254 1.283 1.762ZM10.464 11.804c.524-.508.953-1.136 1.283-1.762.721-1.367 1.172-3.062 1.243-4.615.981-.382 1.772-.526 1.94-.357.363.363-.725 3.63-2.54 5.444-.622.622-1.295 1.057-1.926 1.29ZM11 8.5c0-1.309-.355-2.69-.775-3.786.753-.521 1.377-.798 1.565-.691.417.238.253 3.287-.854 5.451A7.31 7.31 0 0 0 11 8.5ZM5 8.5c0 .333.022.659.064.974C3.957 7.31 3.793 4.26 4.21 4.023c.188-.107.812.17 1.566.691C5.356 5.811 5 7.191 5 8.5ZM8 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
  </Svg>
);
export default Lotus;