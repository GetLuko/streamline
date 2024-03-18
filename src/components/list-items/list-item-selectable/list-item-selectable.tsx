import React from 'react';
import { Pressable } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Divider } from '../components/divider';
import { ListItemSkeleton } from '../components/list-item-skeleton';
import {
  BACKGROUND_COLOR,
  BACKGROUND_PRESSED_COLOR,
  DIVIDER_VERTICAL_MARGIN,
} from '../list-items.constants';

import { BottomContent } from './components/bottom-content';
import { CenterContent } from './components/center-content';
import LeftIcon from './components/left-icon';
import { TopContent } from './components/top-content';
import { ListItemSelectableProps } from './list-item-selectable.type';
import { getListItemsSelectableColors } from './list-item-selectable.utils';

export const ListItemSelectable = ({
  accessibilityLabel,
  description,
  header,
  iconName,
  isDisabled,
  isSkeleton,
  onLongPress,
  onPress,
  showDivider,
  testID,
  title,
  value,
  rightOption,
  isSelected = false,
}: ListItemSelectableProps) => {
  const [handlePress, isResolving] = usePress({ isDisabled, onPress });

  if (isSkeleton) {
    return <ListItemSkeleton />;
  }

  const { leftContentColor, mainTextColor, secondaryTextColor } =
    getListItemsSelectableColors({ isSelected, isDisabled });

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
          <LeftIcon
            isSelected={isSelected}
            isLoading={isResolving}
            color={leftContentColor}
            testID={testID}
          />

          <Box flex={1}>
            {header ? (
              <TopContent header={header} color={secondaryTextColor} />
            ) : null}
            <CenterContent
              rightOption={rightOption}
              color={mainTextColor}
              title={title}
              value={value}
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

export default ListItemSelectable;
