import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  slotContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 30,
    height: 225,
    width: 330,
  },
  frameView: {
    position: 'absolute',
    top: 0,
  },
  slotView: {
    position: 'absolute',
    top: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 300,
  },
});

export default styles;
