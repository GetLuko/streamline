/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Warning = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.703 10.304a2.399 2.399 0 0 0 0 3.392l8.6 8.601a2.399 2.399 0 0 0 3.393 0l8.601-8.6a2.399 2.399 0 0 0 0-3.393l-8.6-8.601a2.399 2.399 0 0 0-3.393 0l-8.601 8.6Zm11.324 2.935c-.025.659-.376 1.041-1.016 1.041-.646 0-.991-.382-1.01-1.041l-.12-5.859a3.99 3.99 0 0 1-.012-.25c0-.71.452-1.13 1.142-1.13.696 0 1.135.42 1.135 1.13l-.002.11a3.8 3.8 0 0 0-.004.14l-.113 5.859Zm.283 3.513c0 .696-.584 1.248-1.299 1.248-.721 0-1.311-.552-1.311-1.248 0-.697.59-1.255 1.311-1.255.715 0 1.299.558 1.299 1.255Z"
      fill={color}
    />
  </Svg>
);
export default Warning;
