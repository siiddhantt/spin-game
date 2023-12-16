import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';

import {store} from './state/store';
import Home from './screens/Home';
import Subscriptions from './screens/Subscriptions';
import Subscribe from './screens/Subscribe';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <Stack.Navigator
            screenOptions={{
              animationEnabled: true,
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Subscriptions" component={Subscriptions} />
            <Stack.Screen name="Subscribe" component={Subscribe} />
          </Stack.Navigator>
          <Toast visibilityTime={1000} />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
