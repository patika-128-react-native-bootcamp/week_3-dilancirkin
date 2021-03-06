import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
  default_container: {
    margin: spacing.large,
    padding: spacing.normal,
    borderRadius: radius.smooth,
    alignItems: 'center',
    backgroundColor: '#37474f',
  },
  default_text: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
  },
});
