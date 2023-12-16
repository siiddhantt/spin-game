import {Pressable, View, Animated, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const defaultStyles = {
  bgGradientColors: ['#0100ff', '#ff00fb'],
  headGradientColors: ['grey', 'grey'],
};

const activeStyles = {
  bgGradientColors: ['#00c4ff', '#fff600'],
  headGradientColors: ['#229642', '#229642'],
};

const Switch = (props: any) => {
  const {id, value, onValueChange} = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 28],
  });

  const toggleSwitch = () => {
    onValueChange(id);
  };

  const currentStyles = value ? activeStyles : defaultStyles;

  return (
    <Pressable
      onPress={toggleSwitch}
      style={[
        styles.pressable,
        value
          ? {borderWidth: 2, borderColor: '#229642', borderStyle: 'solid'}
          : {
              borderWidth: 2,
              borderColor: 'grey',
              borderStyle: 'solid',
            },
      ]}>
      <View style={styles.innerContainer}>
        <Animated.View
          style={{
            transform: [{translateX}],
          }}>
          <LinearGradient
            colors={currentStyles.headGradientColors}
            style={styles.headGradient}
          />
        </Animated.View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: 54,
    height: 28,
    borderRadius: 2,
  },
  backgroundGradient: {
    borderRadius: 2,
    flex: 1,
  },
  innerContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headGradient: {
    width: 20,
    height: 20,
    borderRadius: 2,
  },
});

export default Switch;
