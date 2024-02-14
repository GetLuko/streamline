import { ActivityIndicator, View } from 'react-native';
import { StreamlineThemeProvider } from '../src/theme/ThemeProvider';
import { useFonts } from 'expo-font';

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => {
      const [fontsLoaded] = useFonts({
        'CircularXX-Bold': require('./fonts/CircularXX-Bold.otf'),
        'CircularXX-Medium': require('./fonts/CircularXX-Medium.otf'),
        'CircularXX-Book': require('./fonts/CircularXX-Book.otf'),
        'CircularXX-BookItalic': require('./fonts/CircularXX-BookItalic.otf'),
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
        <StreamlineThemeProvider>
          <Story />
        </StreamlineThemeProvider>
      );
    },
  ],
};

export default preview;
