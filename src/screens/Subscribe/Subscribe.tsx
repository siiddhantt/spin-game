import React, {useEffect} from 'react';
import {View, ScrollView, Text, Image, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {addSubscription, removeSubscription} from '../../state';
import Switch from '../../components/Switch';
import ArrowBack from '../../svgComponents/ArrowBack';

interface Plan {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Subscribe() {
  const navigation = useNavigation();
  const [states, setStates] = React.useState(Array<Plan>);
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.sub as any);
  const options = [
    {
      id: 0,
      title: 'Alt Balaji',
      price: 699,
      image: 'https://i.imgur.com/JFFMLN5.png',
    },
    {
      id: 1,
      title: 'KLiKK',
      price: 799,
      image: 'https://i.imgur.com/OSv9Lgg.png',
    },
  ];
  const handleToggle = (id: number) => {
    if (!state[id]) {
      dispatch(addSubscription(options[id]) as any);
    } else {
      dispatch(removeSubscription(options[id]) as any);
    }
  };
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
      <View style={styles.optionView}>
        {options.map(value => {
          return (
            <View key={value.id} style={styles.viewContainer}>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image
                    src={value.image}
                    style={{width: 58, height: 58}}></Image>
                </View>
                <View style={styles.details}>
                  <Text style={styles.foreground}>{value.title}</Text>
                  <Text style={styles.foreground1}>
                    plan starts from ₹ {value.price}
                  </Text>
                  <Text style={styles.foreground2}>view details</Text>
                </View>
                <Pressable onPress={() => handleToggle(value.id)}>
                  <Switch
                    id={value.id}
                    value={states[value.id] ? true : false}
                    onValueChange={handleToggle}
                  />
                </Pressable>
              </View>
              <LinearGradient
                colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{marginTop: 1, marginBottom: 15}}>
                <View style={styles.divider}></View>
              </LinearGradient>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Subscribe;
