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
import { LeftContent } from '../list-item/components/left-content';
import { BottomContent } from './components/bottom-content';
import { CenterContent } from './components/center-content';
import { TopContent } from './components/top-content';
import { ListItemValueProps } from './list-item-value.types';

/**
 * Todo - Use pressable from react-native-ama when issue below fixed
 * https://github.com/FormidableLabs/react-native-ama/issues/92
 */
export const ListItemValue = ({
  accessibilityLabel,
  description,
  header,
  iconName,
  isSkeleton,
  onLongPress,
  onPress,
  rightOption,
  showDivider,
  testID,
  title,
  value,
}: ListItemValueProps) => {
  const [handlePress, isResolving] = usePress({ onPress });

  if (isSkeleton) {
    return <ListItemSkeleton />;
  }

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
          <LeftContent iconName={iconName} />
          <Box flex={1}>
            {header ? <TopContent header={header} /> : null}
            <CenterContent
              isLoading={isResolving}
              onPress={onPress}
              rightOption={rightOption}
              title={title}
              value={value}
            />
            {description ? <BottomContent description={description} /> : null}
          </Box>
          {showDivider ? <Divider leftSpacing={dividerLeftSpacing} /> : null}
        </Box>
      )}
    </Pressable>
  );
};

export default ListItemValue;
