import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    height: '100%',
    width: '100%',
  },
  pressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  press: {
    width: 101,
    textDecorationLine: 'underline',
    color: '#A90808',
    fontFamily: 'Poppins-Medium',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foreground: {
    color: '#FFFFFF',
  },
});

export default styles;
