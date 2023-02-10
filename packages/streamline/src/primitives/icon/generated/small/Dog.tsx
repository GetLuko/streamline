/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Dog = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 12c-.824 0-1.722-.372-2.404-1.036l-.714.856a.5.5 0 0 1-.874-.418c.232-1.161.116-1.832-.055-2.458-.03-.114-.065-.23-.1-.349-.165-.559-.355-1.2-.355-2.095 0-1.284.198-2.408.758-3.221C2.34 2.428 3.263 2 4.498 2c.513 0 .932.164 1.252.436A5.983 5.983 0 0 1 8 2c.794 0 1.553.155 2.247.435.32-.271.738-.435 1.251-.435 1.235 0 2.157.428 2.743 1.279.56.813.757 1.937.757 3.221 0 .895-.19 1.536-.354 2.095-.036.12-.07.236-.1.349-.171.626-.287 1.297-.055 2.458a.5.5 0 0 1-.875.418l-.712-.855C12.22 11.63 11.322 12 10.499 12c-1 0-2-.432-2-2 0-.069.019-.135.049-.196a.602.602 0 0 1 .094-.134c.218-.24.357-.564.357-.794 0-.38-.377-.378-.867-.376l-.133.001h-.132C7.377 8.497 7 8.494 7 8.875c0 .23.14.553.358.794A.498.498 0 0 1 7.5 10c0 1.568-1 2-2 2Zm.25-5c.414 0 .75-.448.75-1s-.336-1-.75-1C5.334 5 5 5.448 5 6s.335 1 .75 1ZM11 6c0 .552-.336 1-.75 1-.415 0-.75-.448-.75-1s.335-1 .75-1c.414 0 .75.448.75 1Z"
      fill={color}
    />
    <Path
      d="M5.757 12.992A2.992 2.992 0 0 0 7.999 14c.893 0 1.694-.39 2.243-1.008-.565-.034-1.208-.19-1.747-.627a2.501 2.501 0 0 1-.496-.54 2.497 2.497 0 0 1-.495.54c-.539.437-1.182.593-1.747.627Z"
      fill={color}
    />
  </Svg>
);
export default Dog;
