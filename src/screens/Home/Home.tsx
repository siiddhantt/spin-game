import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Slots from '../Slots';

function Home() {
  const navigation = useNavigation();
  const goToSubscriptions = () => {
    navigation.navigate('Subscriptions' as never);
  };
  return (
    <SafeAreaView style={styles.scrollView}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={styles.scrollView.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.pressContainer}>
          <Pressable onPress={goToSubscriptions}>
            <Text style={styles.press}>view all</Text>
          </Pressable>
        </View>
        <View style={styles.container}>
          <Slots />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
