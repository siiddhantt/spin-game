import React, {useRef, useState, useEffect} from 'react';
import {Pressable, View, Text, Alert} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Toast from 'react-native-toast-message';

import styles from './styles';
import Frame from '../../svgComponents/Frame';
import Bomb from '../../svgComponents/Bomb';
import Crown from '../../svgComponents/Crown';
import Banana from '../../svgComponents/Banana';
import SpinButton from '../../svgComponents/SpinButton';

const items = [<Bomb />, <Crown />, <Banana />];
function Slots(): React.JSX.Element {
  var carouselRef1 = useRef<any>(null);
  var carouselRef2 = useRef<any>(null);
  var carouselRef3 = useRef<any>(null);
  const spin = () => {
    var s1 = getRandomNumber(),
      s2 = getRandomNumber(),
      s3 = getRandomNumber();
    carouselRef1.current?.scrollTo({index: s1, animated: true});
    carouselRef2.current?.scrollTo({index: s2, animated: true});
    carouselRef3.current?.scrollTo({index: s3, animated: true});
    handleTurn(s1, s2, s3);
  };
  const getRandomNumber = () => {
    return Math.floor(Math.random() * items.length);
  };
  const handleTurn = (s1: number, s2: number, s3: number) => {
    if (s1 === s2 && s2 === s3)
      Alert.alert('Winner', 'Congratulations, you won!', [
        {text: 'Ok', onPress: () => {}},
      ]);
    else
      Toast.show({
        type: 'error',
        text1: 'Lost',
        text2: 'Better luck next time!',
      });
  };
  return (
    <>
      <View style={styles.slotContainer}>
        <View style={styles.frameView}>
          <Frame />
        </View>
        <View style={styles.slotView}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Carousel
              vertical
              ref={carouselRef1}
              loop={false}
              width={90}
              height={200}
              data={items}
              autoPlayInterval={150}
              scrollAnimationDuration={200}
              renderItem={({index}) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[getRandomNumber()]}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[index]}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[getRandomNumber()]}
                  </Text>
                </View>
              )}
            />
            <Carousel
              vertical
              ref={carouselRef2}
              loop={false}
              width={90}
              height={200}
              data={items}
              autoPlayInterval={150}
              scrollAnimationDuration={200}
              renderItem={({index}) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[getRandomNumber()]}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[index]}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[getRandomNumber()]}
                  </Text>
                </View>
              )}
            />
            <Carousel
              vertical
              ref={carouselRef3}
              loop={false}
              width={90}
              height={200}
              data={items}
              autoPlayInterval={150}
              scrollAnimationDuration={200}
              renderItem={({index}) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[getRandomNumber()]}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[index]}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    {items[getRandomNumber()]}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      <Pressable onPress={spin}>
        <SpinButton />
      </Pressable>
    </>
  );
}

export default Slots;
