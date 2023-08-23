import { Pressable, StyleSheet } from 'react-native';

import { Box } from '../../../primitives/box/box';
import { Text } from '../../../primitives/text/text';
import Switch from '../../switch/switch';
import { NavigationSectionTitleProps } from './navigation-section-title.types';

export const NavigationSectionTitle = ({
  title,
  description,
  rightComponent,
}: NavigationSectionTitleProps) => {
  const isSwitch = rightComponent?.type === 'switch';

  return (
    <Box
      flexDirection="row"
      paddingHorizontal="md"
      paddingVertical="xs"
      alignItems="center"
    >
      <Box flex={1}>
        <Text variant="titleSmallBold">{title}</Text>
        {description ? (
          <Text variant="body" color="GREY_700" marginTop="xxs">
            {description}
          </Text>
        ) : null}
      </Box>
      {rightComponent ? (
        <Box marginLeft="xs" alignSelf={isSwitch ? 'center' : 'flex-start'}>
          {isSwitch ? (
            <Switch {...rightComponent} />
          ) : (
            <Pressable
              testID={rightComponent.testID}
              onPress={rightComponent.onPress}
              hitSlop={10}
              style={styles.actionContainer}
            >
              {({ pressed }) => (
                <Text
                  variant="bodyBold"
                  color="BLUKO_500"
                  opacity={pressed ? 0.5 : 1}
                >
                  {rightComponent.title}
                </Text>
              )}
            </Pressable>
          )}
        </Box>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    paddingVertical: 2, // Same as the figma, in order to vertically align with the title. Not a theme value
  },
});

export default NavigationSectionTitle;
