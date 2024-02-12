import { Pressable } from 'react-native';

import CenterContent from './components/center-content';
import LeftContent from './components/left-content';
import { ListItemOptionProps } from './list-item-option.types';
import { getBorderColor, getBackgroundColor } from './list-item-option.utils';
import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import { ListItemSkeleton } from '../components/list-item-skeleton';

export function ListItemOption({
  accessibilityLabel,
  description = '',
  header = '',
  isSkeleton,
  onLongPress,
  onPress,
  title,
  rightOption,
  isSelected = false,
  isDisabled = false,
  iconName,
  type,
}: ListItemOptionProps) {
  const [handlePress, isResolving] = usePress({ onPress });

  if (isSkeleton) {
    return <ListItemSkeleton />;
  }

  return (
    <Pressable
      accessibilityLabel={
        accessibilityLabel ?? `${header}\n${title}\n${description}`
      }
      disabled={isDisabled}
      onPress={handlePress}
      onLongPress={onLongPress}
    >
      {({ pressed }) => (
        <>
          <Box
            position="absolute"
            top={-2}
            left={-2}
            right={-2}
            bottom={-2}
            backgroundColor="BLUKO_100"
            opacity={pressed || isSelected || isResolving ? 1 : 0}
            borderRadius="lg"
          />
          <Box
            flex={1}
            flexDirection="row"
            alignItems="center"
            padding="md"
            borderRadius="lg"
            borderWidth={2}
            backgroundColor={getBackgroundColor({
              pressed,
              selected: isSelected,
              isResolving,
            })}
            borderColor={getBorderColor({
              pressed,
              selected: isSelected,
              isDisabled,
              isResolving,
            })}
          >
            <LeftContent
              type={type}
              iconName={iconName}
              isDisabled={isDisabled}
              isSelected={isSelected}
              isLoading={isResolving}
            />
            <CenterContent
              title={title}
              description={description}
              header={header}
              isDisabled={isDisabled}
              isSelected={isSelected}
            />

            {rightOption ? (
              <ButtonIcon
                iconName={rightOption.iconName}
                accessibilityLabel={rightOption.accessibilityLabel}
                onPress={rightOption.onPress}
                appearance="secondary"
                size="large"
              />
            ) : null}
          </Box>
        </>
      )}
    </Pressable>
  );
}

export default ListItemOption;
