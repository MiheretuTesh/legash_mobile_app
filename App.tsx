import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { StyleSheet, useColorScheme } from 'react-native';
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { chapaPay } from './src/utils/payment/chapa';
import EventSource from 'rn-eventsource';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  const [tokenData, setTokenData] = useState(null);
  const isLoggedIn = async () => {
    try {
      const token: any = await AsyncStorage.getItem('token');
      setTokenData(token);
      return token;
    } catch (err) {
      console.log(err, 'Error while trying to get token');
    }
  };

  useEffect(() => {
    isLoggedIn();
  });

  useEffect(() => {
    SplashScreen.hide();
    // chapaPay();
  }, []);

  useEffect(() => {
    const eventSource = new EventSource(
      'https://legashfund.onrender.com/api/v1/notifications/'
    );

    eventSource.addEventListener('message', (event: any) => {
      const notification = JSON.parse(event.data);
      console.log(notification, 'notification');
      // Handle the received notification, e.g., update state or display a popup
    });

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppNavigation token={tokenData} />
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
