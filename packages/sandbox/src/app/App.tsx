/* eslint-disable jsx-a11y/accessible-emoji */
import { StreamlineThemeProvider } from '@getluko/streamline';
import React, { useRef } from 'react';
import { useFonts } from 'expo-font';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { SandBox } from './sandbox/Sandbox';
import { isMaestro } from './utils/isMaestro';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const [fontsLoaded] = useFonts({
    'CircularXX-Bold': require('./fonts/CircularXX-Bold.otf'),
    'CircularXX-Book': require('./fonts/CircularXX-Book.otf'),
  });

  const disableAnimation = isMaestro();

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignContent: 'center', alignSelf: 'center' }}
        size={120}
        color="#000"
      />
    );
  }
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{ flex: 0 }}
        >
          <StreamlineThemeProvider disableAnimation={disableAnimation}>
            <SandBox />
          </StreamlineThemeProvider>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F4F3EF',
    flex: 1,
  },
});

export default App;
