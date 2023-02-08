/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ekg = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.123 4.327c-1.542.15-2.722 1.307-2.885 2.847A46.33 46.33 0 0 0 1 12c0 1.99.111 3.615.238 4.826.163 1.54 1.343 2.697 2.885 2.847C5.806 19.838 8.383 20 12 20c3.618 0 6.195-.162 7.877-.327 1.542-.15 2.722-1.307 2.885-2.847.127-1.211.238-2.837.238-4.826 0-1.99-.111-3.615-.238-4.826-.163-1.54-1.343-2.697-2.885-2.847C18.195 4.162 15.617 4 12 4c-3.618 0-6.194.162-7.877.327Zm7.313 3.322a1 1 0 0 0-1.784-.179L7.446 11H5a1 1 0 1 0 0 2h3a1 1 0 0 0 .848-.47l1.427-2.283 2.289 6.104a1 1 0 0 0 1.784.179L16.554 13H19a1 1 0 1 0 0-2h-3a1 1 0 0 0-.848.47l-1.427 2.283-2.289-6.104Z"
      fill={color}
    />
  </Svg>
);
export default Ekg;
