import { FC } from 'react';
import { Pressable } from 'react-native-ama';

import { Box } from '../../../primitives/box/box';
import { Icon } from '../../../primitives/icon/icon';
import { ICON_SIZE } from '../../../primitives/icon/icon.constants';
import { Text } from '../../../primitives/text/text';
import { getFlagEmoji } from '../../../utils/country';
import { isIOS } from '../../../utils/platform';
import { Divider } from '../components/divider';
import { getListItemsColors } from '../list-item/list-item.utils';
import {
  BACKGROUND_COLOR,
  BACKGROUND_PRESSED_COLOR,
  DIVIDER_VERTICAL_MARGIN,
} from '../list-items.constants';

import { ListItemCountryProps } from './list-item-country.types';

export const ListItemCountry: FC<ListItemCountryProps> = ({
  accessibilityLabel,
  appearance = 'neutral',
  countryCode,
  isDisabled,
  onPress,
  showDivider,
  testID,
  title,
}) => {
  const emoji = getFlagEmoji(countryCode);
  const { mainTextColor } = getListItemsColors({
    appearance,
    isDisabled,
  });

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityRole={onPress ? 'button' : 'none'}
      testID={testID}
      onPress={onPress}
      disabled={isDisabled}
    >
      {({ pressed }) => (
        <Box
          alignItems="center"
          backgroundColor={
            pressed && onPress ? BACKGROUND_PRESSED_COLOR : BACKGROUND_COLOR
          }
          flexDirection="row"
          paddingVertical="md"
          padding="md"
        >
          <Box flex={1} alignItems="center" flexDirection="row">
            <Box marginRight="md" justifyContent="center" alignItems="center">
              <Text
                allowFontScaling={false}
                fontSize={isIOS ? ICON_SIZE['large'] : ICON_SIZE['regular']}
              >
                {emoji}
              </Text>
            </Box>

            <Box flex={1}>
              <Text variant="body" color={mainTextColor}>
                {title}
              </Text>
            </Box>
            {onPress ? (
              <Icon color="GREY_400" iconName="ChevronFarRight" />
            ) : null}
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
