import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Icon } from '../../../primitives/icon/icon';
import { CenterContent } from './components/center-content';
import { ListItemSkeleton } from './components/list-item-skeleton';
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
  title,
}: ListItemProps) => {
  const [handlePress, isResolving] = usePress({ onPress });

  if (isSkeleton) {
    return <ListItemSkeleton />;
  }

  return (
    <Pressable
      accessibilityLabel={
        accessibilityLabel ?? `${header}\n${title}\n${description}`
      }
      accessibilityRole={handlePress ? 'button' : 'none'}
      onLongPress={onLongPress}
      onPress={handlePress}
    >
      {({ pressed }) => (
        <Box
          alignItems="center"
          backgroundColor={pressed && onPress ? 'GREY_75' : 'PURE_WHITE_1000'}
          flexDirection="row"
          padding="md"
          paddingRight={rightOption ? 'xs' : 'md'}
        >
          <Icon color="BLUKO_500" iconName={iconName} size="large" />
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
          {showDivider ? <Divider /> : null}
        </Box>
      )}
    </Pressable>
  );
};

const Divider = () => (
  <Box
    backgroundColor="GREY_100"
    position="absolute"
    height={StyleSheet.hairlineWidth}
    right={16}
    bottom={0}
    left={56}
  />
);

export default ListItem;
