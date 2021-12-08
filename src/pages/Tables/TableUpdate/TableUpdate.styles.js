import {StyleSheet} from 'react-native';
import spacing from '../../../styles/spacing';
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.normal,
  },
  name_label: {
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  order_container: {
    margin: spacing.tiny,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  order_name: {
    fontSize: 15,
  },
  order_price: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: spacing.normal,
    textAlign: 'right',
  },
});
