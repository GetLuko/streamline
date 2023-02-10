/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Earth = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM8.5 7.266A4.257 4.257 0 0 0 7 7H6c-.07 0-.14-.007-.206-.021-.654-.137-.507-1.01-.025-1.473a9.002 9.002 0 0 1 15.111 5.02c.133.806-.79 1.652-1.156.921l-.553-1.105a.618.618 0 0 0-1.17.276v.764a.618.618 0 0 1-1.172.276l-.552-1.105a1 1 0 0 0-.895-.553h-.764a1 1 0 0 0-.894.553l-.447.894a1 1 0 0 1-.798.548c-.352-.008-.696-.033-.983-.105-.398-.1-.488-.618-.521-1.027-.073-.878-.3-1.593-.652-2.161A3.343 3.343 0 0 0 8.5 7.266ZM6.528 8.701c-.326-.278-.764-.455-1.145-.259a3.997 3.997 0 0 0-.39.23l-.272.18a3.864 3.864 0 0 0-.175 6.307l1.318.989a4 4 0 0 1 1.48 2.23l.337.846c.12.48.44.869.857 1.086.108.045.216.088.326.129.144.04.296.061.451.061.93 0 1.685-.254 1.685-1.185v-2.197a1 1 0 0 1 .553-.894l.552-.277a1.618 1.618 0 0 0 .493-2.514 1.284 1.284 0 0 0-.662-.406c-.23-.056-.508-.123-.682-.167-.289-.072-.596-.192-.838-.41A1.241 1.241 0 0 1 10 11.5c0-.642-.082-1.165-.218-1.59-.135-.423-.603-.586-1.047-.55-.713.056-1.532-.081-2.207-.659Z"
      fill={color}
    />
  </Svg>
);
export default Earth;
