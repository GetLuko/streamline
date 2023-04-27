import { usePress } from '../../../hooks/use-press.hook';
import { Pressable } from 'react-native';
import { ListItemSkeleton } from '../components/list-item-skeleton';
import { Box } from '../../../primitives/box/box';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import LeftContent from './components/left-content';
import { CenterContent } from './components/center-content';
import { getBorderColor } from './list-item-option.utils';
import { getBackgroundColor } from './list-item-option.utils';
import { ListItemOptionProps } from './list-item-option.type';

export function ListItemOption({
  accessibilityLabel,
  description = '',
  header = '',
  isSkeleton,
  onLongPress,
  onPress,
  title,
  showInfoButton,
  onInfoButtonPress,
  isSelected = false,
  disabled = false,
  iconName,
  type,
}: ListItemOptionProps) {
  const [handlePress, isResolving] = usePress({ onPress });

  if (isSkeleton) {
    return <ListItemSkeleton />;
  }

  return (
    <Pressable disabled={disabled} onPress={handlePress}>
      {({ pressed }) => (
        <>
          <Box
            position={'absolute'}
            top={-2}
            left={-2}
            right={-2}
            bottom={-2}
            backgroundColor={'BLUKO_100'}
            opacity={(pressed && isSelected) || isResolving ? 1 : 0}
            borderRadius={'lg'}
          />
          <Box
            flex={1}
            flexDirection={'row'}
            alignItems={'center'}
            padding={'md'}
            borderRadius={'lg'}
            borderWidth={2}
            backgroundColor={getBackgroundColor({
              pressed,
              selected: isSelected,
              isResolving,
            })}
            borderColor={getBorderColor({
              pressed,
              selected: isSelected,
              disabled,
              isResolving,
            })}
          >
            <LeftContent
              type={type}
              iconName={iconName}
              isDisabled={disabled}
              isSelected={isSelected}
              isLoading={isResolving}
            />
            <CenterContent
              title={title}
              description={description}
              header={header}
              disabled={disabled}
              isSelected={isSelected}
            />

            {showInfoButton ? (
              <ButtonIcon
                iconName="Info"
                accessibilityLabel="Info"
                onPress={onInfoButtonPress}
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
