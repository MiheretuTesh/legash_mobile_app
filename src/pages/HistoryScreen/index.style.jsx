import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';

const { height, width } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: height - 100,
    alignItems: 'center',
    backgroundColor: COLORS.screenColor,
    paddingBottom: 70,
  },
});
