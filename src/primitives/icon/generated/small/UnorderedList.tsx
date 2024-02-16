/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const UnorderedList = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2.9 5.3a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM5.88 3.5c-.265 0-.48.269-.48.6v.6c0 .331.215.6.48.6h7.64c.265 0 .48-.269.48-.6v-.6c0-.331-.215-.6-.48-.6H5.88ZM2.9 8.8a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM5.88 7c-.265 0-.48.268-.48.6v.6c0 .331.215.6.48.6h7.64c.265 0 .48-.269.48-.6v-.6c0-.332-.215-.6-.48-.6H5.88ZM3.8 11.4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM5.4 11.1c0-.331.215-.6.48-.6h7.64c.265 0 .48.269.48.6v.6c0 .331-.215.6-.48.6H5.88c-.265 0-.48-.269-.48-.6v-.6Z"
      fill={color}
    />
  </Svg>
);
export default UnorderedList;
