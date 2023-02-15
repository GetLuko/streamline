/* eslint-disable jsx-a11y/accessible-emoji */
import { Box, Text, StreamlineThemeProvider } from '@getluko/streamline';
import React, { useRef } from 'react';
import { useFonts } from 'expo-font';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import NxDocumentation from './NxDocumentation';
import { IconsSandbox } from './sandbox/icon.doc';
import { TypoSandbox } from './sandbox/text.doc';

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
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <StreamlineThemeProvider>
            <Box backgroundColor="BLUKO_500" width={200} height={200} />
            <Text fontFamily="CircularXX-Book" fontSize={30}>
              Hello there,
            </Text>
            <TypoSandbox />
            <IconsSandbox />
          </StreamlineThemeProvider>
          <NxDocumentation />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F4F3EF',
  },
});

export default App;
