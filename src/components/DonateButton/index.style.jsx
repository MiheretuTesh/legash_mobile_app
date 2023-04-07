import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.redColor,
    padding: 10,
    borderRadius: 12,
    paddingHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {fontSize: 20, fontWeight: 600, color: COLORS.whiteColor},
});
