import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    height: '100%',
    width: '100%',
  },
  arrow: {
    marginTop: 25,
    marginLeft: 12,
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  pressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  press: {
    width: 101,
    textDecorationLine: 'underline',
    color: '#A90808',
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
