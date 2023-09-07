import React from 'react';
import { Pressable } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Divider } from '../components/divider';
import { ListItemSkeleton } from '../components/list-item-skeleton';
import { LeftContent } from '../list-item/components/left-content';
import { getListItemsColors } from '../list-item/list-item.utils';
import {
  BACKGROUND_COLOR,
  BACKGROUND_PRESSED_COLOR,
} from '../list-items.constants';
import { BottomContent } from './components/bottom-content';
import { CenterContent } from './components/center-content';
import { TopContent } from './components/top-content';
import { ListItemValueProps } from './list-item-value.types';

const DIVIDER_VERTICAL_MARGIN = 16;

/**
 * Todo - Use pressable from react-native-ama when issue below fixed
 * https://github.com/FormidableLabs/react-native-ama/issues/92
 */
export const ListItemValue = ({
  appearance = 'neutral',
  accessibilityLabel,
  description,
  header,
  iconName,
  isDisabled,
  isSkeleton,
  onLongPress,
  onPress,
  rightOption,
  showDivider,
  testID,
  title,
  value,
}: ListItemValueProps) => {
  const [handlePress, isResolving] = usePress({ isDisabled, onPress });

  if (isSkeleton) {
    return <ListItemSkeleton />;
  }

  const { leftContentColor, mainTextColor, secondaryTextColor } =
    getListItemsColors({ appearance, isDisabled });

  const dividerLeftSpacing = iconName ? 40 : 0;

  return (
    <Pressable
      accessibilityLabel={
        accessibilityLabel ?? `${header}\n${title}\n${description}`
      }
      accessibilityRole={handlePress ? 'button' : 'none'}
      onLongPress={onLongPress}
      onPress={handlePress}
      testID={testID}
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
          <LeftContent
            iconName={iconName}
            isDisabled={isDisabled}
            isLoading={isResolving}
            color={leftContentColor}
          />
          <Box flex={1}>
            {header ? (
              <TopContent header={header} color={secondaryTextColor} />
            ) : null}
            <CenterContent
              onPress={onPress}
              rightOption={rightOption}
              title={title}
              value={value}
              color={mainTextColor}
            />
            {description ? (
              <BottomContent
                description={description}
                color={secondaryTextColor}
              />
            ) : null}
          </Box>
          {showDivider ? (
            <Divider
              position="absolute"
              right={DIVIDER_VERTICAL_MARGIN}
              bottom={0}
              left={DIVIDER_VERTICAL_MARGIN + dividerLeftSpacing}
            />
          ) : null}
        </Box>
      )}
    </Pressable>
  );
};

export default ListItemValue;
