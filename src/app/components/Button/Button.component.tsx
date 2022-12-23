import React from 'react';
import { TouchableHighlight, TouchableHighlightProps } from 'react-native';

export const Button = (props: TouchableHighlightProps) => {
  const { children, ...restProps } = props;

  return <TouchableHighlight {...restProps}>{children}</TouchableHighlight>;
};
