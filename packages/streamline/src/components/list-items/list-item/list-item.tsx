import React from 'react';
import { Pressable } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Divider } from '../components/divider';
import { ListItemSkeleton } from '../components/list-item-skeleton';
import {
  BACKGROUND_COLOR,
  BACKGROUND_PRESSED_COLOR,
} from '../list-items.constants';
import { CenterContent } from './components/center-content';
import { LeftContent } from './components/left-content';
import { RightContent } from './components/right-content';
import { ListItemProps } from './list-item.types';
import { getListItemsColors } from './list-item.utils';

const DIVIDER_VERTICAL_MARGIN = 16;

/**
 * Todo - Use pressable from react-native-ama when issue below fixed
 * https://github.com/FormidableLabs/react-native-ama/issues/92
 */
export const ListItem = ({
  appearance = 'neutral',
  accessibilityLabel,
  description = '',
  header = '',
  iconName,
  isDisabled,
  isSkeleton,
  onLongPress,
  onPress,
  rightOption,
  showDivider,
  testID,
  title,
}: ListItemProps) => {
  const [handlePress, isResolving] = usePress({ onPress, isDisabled });

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
          padding="md"
          paddingRight={rightOption ? 'xs' : 'md'}
        >
          <LeftContent
            iconName={iconName}
            isDisabled={isDisabled}
            isLoading={isResolving}
            color={leftContentColor}
          />
          <CenterContent
            description={description}
            header={header}
            secondaryTextColor={secondaryTextColor}
            mainTextColor={mainTextColor}
            title={title}
          />
          <RightContent onPress={onPress} rightOption={rightOption} />
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

export default ListItem;
