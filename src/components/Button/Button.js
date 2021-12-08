import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

export default function Button({title, ...rest}) {
  return (
    <TouchableOpacity style={styles.default_container} {...rest}>
      <Text style={styles.default_text}>{title}</Text>
    </TouchableOpacity>
  );
}
