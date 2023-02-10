/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cellar = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 1a5.6 5.6 0 0 0-1.319.157.467.467 0 0 0-.32.613l.32.945c.089.26.371.397.642.347a3.694 3.694 0 0 1 1.354 0c.271.05.553-.086.642-.347l.32-.945a.467.467 0 0 0-.32-.613A5.599 5.599 0 0 0 8 1ZM4.032 6.941a.542.542 0 0 0-.41-.6l-.974-.207a.474.474 0 0 0-.575.385A6.752 6.752 0 0 0 2 7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5c0-.188.01-.374.032-.559ZM3.5 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1ZM3.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1ZM5.436 4.04c.2-.19.25-.5.088-.723l-.588-.805a.47.47 0 0 0-.686-.092c-.233.201-.45.42-.648.651-.28.334-.526.697-.736 1.08a.473.473 0 0 0 .23.655l.9.415c.251.115.546.004.687-.234.21-.352.462-.672.753-.948ZM12.378 6.342a.542.542 0 0 0-.41.599c.021.185.032.371.032.559a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5 6.75 6.75 0 0 0-.072-.98.474.474 0 0 0-.576-.386l-.974.208ZM12 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM12 12.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM10.476 3.317c-.163.223-.112.533.088.722.29.276.544.596.753.948.141.238.436.35.687.234l.9-.415a.473.473 0 0 0 .23-.655 6.66 6.66 0 0 0-.736-1.08 6.193 6.193 0 0 0-.648-.651.47.47 0 0 0-.686.092l-.588.805Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7.5C5 5.567 6.343 4 8 4s3 1.567 3 3.5V14H5V7.5ZM9.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
  </Svg>
);
export default Cellar;
