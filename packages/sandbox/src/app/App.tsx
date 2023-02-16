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
} from 'react-native';
import { SandBox } from './sandbox/Sandbox';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const [fontsLoaded] = useFonts({
    'CircularXX-Bold': require('./fonts/CircularXX-Bold.otf'),
    'CircularXX-Book': require('./fonts/CircularXX-Book.otf'),
  });
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
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{ flex: 0 }}
        >
          <StreamlineThemeProvider>
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
