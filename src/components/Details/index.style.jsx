import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
  },
  backgroundImg: {
    height: 200,
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundImgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  heroTxt: {
    color: COLORS.txtColor,
    fontSize: 20,
    fontWeight: 700,
    paddingBottom: 5,
  },
  txtContainer: {
    flexDirection: 'row',
  },
  txt: {
    color: COLORS.txtColor,
    fontWeight: 500,
  },
});
