import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { CenterContent } from './components/center-content';
import { LeftContent } from './components/left-content';
import { ListItemSkeleton } from '../components/list-item-skeleton';
import { RightContent } from './components/right-content';
import { ListItemProps } from './list-item.types';

/**
 * Todo - Use pressable from react-native-ama when issue below fixed
 * https://github.com/FormidableLabs/react-native-ama/issues/92
 */
export const ListItem = ({
  accessibilityLabel,
  description = '',
  header = '',
  iconName,
  isSkeleton,
  onLongPress,
  onPress,
  rightOption,
  showDivider,
  testID,
  title,
}: ListItemProps) => {
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
          backgroundColor={pressed && onPress ? 'GREY_75' : 'PURE_WHITE_1000'}
          flexDirection="row"
          padding="md"
          paddingRight={rightOption ? 'xs' : 'md'}
        >
          <LeftContent iconName={iconName} />
          <CenterContent
            description={description}
            header={header}
            title={title}
          />
          <RightContent
            isLoading={isResolving}
            onPress={onPress}
            rightOption={rightOption}
          />
          {showDivider ? <Divider leftSpacing={dividerLeftSpacing} /> : null}
        </Box>
      )}
    </Pressable>
  );
};

const DIVIDER_VERTICAL_MARGIN = 16;

const Divider = ({ leftSpacing }: { leftSpacing: number }) => (
  <Box
    backgroundColor="GREY_100"
    position="absolute"
    height={StyleSheet.hairlineWidth}
    right={DIVIDER_VERTICAL_MARGIN}
    bottom={0}
    left={DIVIDER_VERTICAL_MARGIN + leftSpacing}
  />
);

export default ListItem;
