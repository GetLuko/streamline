/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const Us = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Circle cx={8} cy={8} r={7} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2c-.959 0-1.865.225-2.67.625A.499.499 0 0 1 5 3.5a.5.5 0 0 1-.486-.384c-.224.16-.437.335-.636.524a.501.501 0 1 1-.367.378c-.203.23-.39.475-.557.734a.5.5 0 1 1-.4.725A5.977 5.977 0 0 0 2.022 8.5H8V2ZM7 3.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 4.625a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 5.75a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 6.875a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM3 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
    <Path
      d="M11.318 3C10.368 2.368 9.227 2 8 2v1h3.318ZM8 4.833v-1h4.317c.294.305.556.64.78 1H8ZM8 6.667v-1h5.53c.135.32.243.654.321 1H8ZM8 8.5h5.98a6.081 6.081 0 0 0 0-1H8v1ZM2.149 9.333c.078.346.186.68.322 1h11.058c.136-.32.244-.654.322-1H2.15ZM3.683 12.167a6.026 6.026 0 0 1-.78-1h10.194a6.03 6.03 0 0 1-.78 1H3.683ZM8 14a5.972 5.972 0 0 0 3.318-1H4.682c.95.632 2.091 1 3.318 1Z"
      fill="#D95762"
    />
  </Svg>
);
export default Us;
