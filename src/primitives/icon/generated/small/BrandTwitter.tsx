/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandTwitter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5.274 14.25c5.534 0 8.563-4.586 8.563-8.556 0-.13 0-.258-.006-.387a6.13 6.13 0 0 0 1.502-1.56c-.54.24-1.12.398-1.731.475a3.026 3.026 0 0 0 1.326-1.666 5.989 5.989 0 0 1-1.913.727 3.012 3.012 0 0 0-5.13 2.745 8.548 8.548 0 0 1-6.203-3.143 3.015 3.015 0 0 0 .933 4.017 3.046 3.046 0 0 1-1.361-.376v.041a3.014 3.014 0 0 0 2.412 2.95c-.253.07-.517.106-.793.106-.193 0-.381-.018-.563-.053a3.01 3.01 0 0 0 2.811 2.088 6.04 6.04 0 0 1-3.738 1.29 5.78 5.78 0 0 1-.716-.041 8.565 8.565 0 0 0 4.607 1.343Z"
      fill="#1DA1F2"
    />
  </Svg>
);
export default BrandTwitter;
