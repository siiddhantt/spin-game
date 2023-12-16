import React, {useEffect} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Subscription from '../../components/Subscription';
import ArrowBack from '../../svgComponents/ArrowBack';

interface Plan {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Subscriptions() {
  const [states, setStates] = React.useState(Array<Plan>);
  const navigation = useNavigation();
  const goToSubscribe = () => {
    navigation.navigate('Subscribe' as never);
  };
  const state = useSelector((state: any) => state.sub as any);
  useEffect(() => {
    const temp = Object.keys(state).map(id => {
      return state[id];
    });
    setStates(temp);
  }, [state]);
  return (
    <ScrollView style={styles.scrollView}>
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <ArrowBack />
      </Pressable>
      <View style={styles.pressContainer}>
        <Pressable onPress={goToSubscribe}>
          <Text style={styles.press}>manage</Text>
        </Pressable>
      </View>
      <View style={styles.viewContainer}>
        {states.map((value: Plan) => {
          return value ? (
            <Subscription key={value.id} value={value} />
          ) : (
            <View key={Math.random()}></View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Subscriptions;
