import { isIOS, StreamlineThemeProvider } from '@getluko/streamline';
import { useFonts } from 'expo-font';
import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SandBox } from './sandbox/Sandbox';
import { isMaestro } from './utils/isMaestro';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const [fontsLoaded] = useFonts({
    'CircularXX-Bold': require('./fonts/CircularXX-Bold.otf'),
    'CircularXX-Medium': require('./fonts/CircularXX-Medium.otf'),
    'CircularXX-Book': require('./fonts/CircularXX-Book.otf'),
    'CircularXX-BookItalic': require('./fonts/CircularXX-BookItalic.otf'),
  });

  const disableAnimation = isMaestro();

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        size={120}
        color="#000"
      />
    );
  }
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isIOS ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ flex: 0 }} />
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        enabled={isIOS}
      >
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
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F4F3EF',
    flex: 1,
  },
  activityIndicator: { flex: 1, alignContent: 'center', alignSelf: 'center' },
});

export default App;
