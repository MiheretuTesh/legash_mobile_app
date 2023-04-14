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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  heroTxt: {
    color: COLORS.txtColor,
    fontSize: 18,
    fontWeight: 600,
    paddingBottom: 5,
  },
  txtContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  txt: {
    color: COLORS.txtColor,
    fontWeight: 500,
  },
});
