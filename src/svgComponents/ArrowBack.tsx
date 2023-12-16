import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop, Rect} from 'react-native-svg';

const SvgComponent = () => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Rect
      x="0.5"
      y="0.5"
      width="31"
      height="31"
      stroke="url(#paint0_linear_1_1395)"
      stroke-opacity="0.3"
    />
    <Path
      d="M23 16.5L9 16.5M9 16.5L14.8396 22M9 16.5L14.8396 11"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_1395"
        x1="0"
        y1="0"
        x2="4.478e-07"
        y2="32"
        gradientUnits="userSpaceOnUse">
        <Stop stop-color="white" />
        <Stop offset="1" stop-color="white" stop-opacity="0" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
