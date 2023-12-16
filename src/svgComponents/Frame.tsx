import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const SvgComponent = () => (
  <Svg width="328" height="223" viewBox="0 0 328 223" fill="none">
    <Path d="M6.5 7.30459L0 1V221.873L6.5 215.394V7.30459Z" fill="#272426" />
    <Path
      d="M321 7.30459L327.5 1V221.873L321 215.394V7.30459Z"
      fill="#272426"
    />
    <Path d="M327 0L0.5 0.5L6.5 6.5H320.5L327 0Z" fill="#3B3D3C" />
    <Path d="M327 222.5L0.5 222L6.5 216H320.5L327 222.5Z" fill="#151415" />
    <Rect x="6.5" y="6.5" width="315" height="210" fill="black" />
  </Svg>
);

export default SvgComponent;
