import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Plan {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Subscription({value}: {value: Plan}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image src={value.image} style={{width: 58, height: 58}}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.foreground}>{value.title}</Text>
          <Text style={styles.foreground1}>
            plan starts from ₹ {value.price}
          </Text>
          <Text style={styles.foreground2}>view details</Text>
        </View>
      </View>
      <LinearGradient
        colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{marginTop: 2}}>
        <View style={styles.divider}></View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 18,
    width: 375,
    marginTop: 15,
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
    height: 0.8,
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

export default Subscription;
