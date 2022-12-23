import React, { ReactNode } from 'react';
import { View } from 'react-native';

import styles from './CenterView.styles';

export const CenterView = ({ children }: { children: ReactNode }) => {
  return <View style={styles.main}>{children}</View>;
};
