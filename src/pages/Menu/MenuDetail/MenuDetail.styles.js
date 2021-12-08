import {StyleSheet} from 'react-native';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';
export default StyleSheet.create({
  container: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: spacing.normal,
    padding: spacing.normal,
  },
  label: {
    color: '#8d8d8d',
    fontSize: 12,
    marginVertical: spacing.tiny,
  },
  ingredients: {
    flexDirection: 'row',
  },
  badge_container: {
    backgroundColor: '#37474f',
    margin: spacing.micro,
    borderRadius: radius.soft,
    padding: spacing.tiny,
  },
  badge_label: {
    fontSize: 10,
    color: '#e0e0e0',
    fontWeight: 'bold',
  },
});
