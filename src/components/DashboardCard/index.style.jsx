import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: width - 10,
    height: 100,
    borderRadius: 15,
    padding: 10,
  },
});
