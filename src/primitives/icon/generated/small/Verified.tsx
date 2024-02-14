/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Verified = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.682 1.259a.92.92 0 0 0-1.28 0l-.856.828a.92.92 0 0 1-.768.25l-1.18-.167a.92.92 0 0 0-1.035.752l-.206 1.174a.92.92 0 0 1-.475.654l-1.053.558a.92.92 0 0 0-.396 1.217l.524 1.071a.92.92 0 0 1 0 .808l-.524 1.07a.92.92 0 0 0 .396 1.217l1.053.56a.92.92 0 0 1 .475.653l.206 1.174a.92.92 0 0 0 1.035.752l1.18-.167a.92.92 0 0 1 .768.25l.857.828a.92.92 0 0 0 1.28 0l.856-.829a.92.92 0 0 1 .768-.25l1.18.168a.92.92 0 0 0 1.035-.752l.206-1.174a.92.92 0 0 1 .475-.654l1.053-.559a.92.92 0 0 0 .395-1.216l-.523-1.071a.92.92 0 0 1 0-.808l.523-1.07a.92.92 0 0 0-.395-1.218l-1.053-.558a.92.92 0 0 1-.475-.654l-.206-1.174a.92.92 0 0 0-1.035-.752l-1.18.167a.92.92 0 0 1-.768-.25l-.857-.828Zm2.904 4.71a.75.75 0 0 0-1.172-.938L7 9.3 5.586 7.531a.75.75 0 1 0-1.172.938l2 2.5a.75.75 0 0 0 1.172 0l4-5Z"
      fill={color}
    />
  </Svg>
);
export default Verified;