import { FC } from 'react';
import { ListItemCountryProps } from './list-item-country.types';
import { Box } from '../../../primitives/box/box';
import { getFlagEmoji } from '../../../utils/country';
import { Text } from '../../../primitives/text/text';
import { usePress } from '../../../hooks/use-press.hook';
import { getListItemsColors } from '../list-item/list-item.utils';
import { Pressable } from 'react-native-ama';
import {
  BACKGROUND_COLOR,
  BACKGROUND_PRESSED_COLOR,
} from '../list-items.constants';
import { Divider } from '../components/divider';
import { ICON_SIZE } from '../../../primitives/icon/icon.constants';
import Spinner from '../../spinner/spinner';

const DIVIDER_VERTICAL_MARGIN = 16;

export const ListItemCountry: FC<ListItemCountryProps> = ({
  appearance = 'neutral',
  countryCode,
  title,
  onPress,
  isDisabled,
  accessibilityLabel,
  testID,
  showDivider,
}) => {
  const [handlePress, isResolving] = usePress({ isDisabled, onPress });

  const emoji = getFlagEmoji(countryCode);
  const { leftContentColor, mainTextColor } = getListItemsColors({
    appearance,
    isDisabled,
  });

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityRole={handlePress ? 'button' : 'none'}
      testID={testID}
      onPress={handlePress}
    >
      {({ pressed }) => (
        <Box
          alignItems="center"
          backgroundColor={
            pressed && onPress ? BACKGROUND_PRESSED_COLOR : BACKGROUND_COLOR
          }
          flexDirection="row"
          paddingVertical="md"
          paddingLeft="md"
        >
          <Box flex={1} alignItems="center" flexDirection="row">
            <Box>
              {isResolving ? (
                <Spinner color={leftContentColor} size="regular" />
              ) : (
                <Text marginRight="md" fontSize={ICON_SIZE['large']}>
                  {emoji}
                </Text>
              )}
            </Box>

            <Text variant="body" color={mainTextColor}>
              {title}
            </Text>
          </Box>

          {showDivider ? (
            <Divider
              position="absolute"
              right={DIVIDER_VERTICAL_MARGIN}
              bottom={0}
              left={DIVIDER_VERTICAL_MARGIN + 40}
            />
          ) : null}
        </Box>
      )}
    </Pressable>
  );
};
