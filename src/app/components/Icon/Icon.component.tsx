import React, { FC } from 'react';
import Icomoon, { type IconMoonProps } from 'react-native-icomoon';
import { type IconNames } from './Icon.types';
import json from './Icon.data.json';

type IconProps = Omit<IconMoonProps, 'iconSet' | 'strokeWidth' | 'offset'> & {
  name: IconNames;
  size?: number;
};

/**
 * @param name Name of the icon
 * @param size Size of the icon, in number
 * @param color Color of the icon
 */
export const Icon: FC<IconProps> = (props) => (
  <Icomoon iconSet={json} {...props} />
);
