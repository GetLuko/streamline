/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Box,
  Text,
  StreamlineThemeProvider,
  fonts,
  TextVariant,
} from '@getluko/streamline';
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

const typoContent =
  'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*_+=-/|~`!?.,:;"\'(){}[]<>€£¥§©®™°∞Ωμ∑π√№';
const fontsKeys = Object.keys(fonts).sort() as TextVariant[];

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
            <Box margin="md">
              {fontsKeys.map((key) => (
                <>
                  <Text variant="bodyBold" color="BLUKO_1000" marginVertical="sm" style={{backgroundColor: '#FFF4DE'}}>
                    ----- {key} -----
                  </Text>
                  <Text variant={key} style={{backgroundColor: '#EAE9E3'}}>{typoContent}</Text>
                </>
              ))}
            </Box>
          </StreamlineThemeProvider>
          <NxDocumentation />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});

export default App;
