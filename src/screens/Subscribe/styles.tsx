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
  optionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 18,
    width: 375,
    marginBottom: 8,
  },
  imageContainer: {},
  details: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    width: 375,
  },
  foreground: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  foreground1: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },
  foreground2: {
    marginTop: 3,
    color: '#A90808',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },
});

export default styles;
