import { Pressable } from 'react-native-ama';

import { Box } from '../../../primitives/box/box';
import { Text } from '../../../primitives/text/text';
import InputSearch from '../../inputs/input-search/input-search';
import { usePress } from '../../../hooks/use-press.hook';
import { HIT_SLOP } from '../../../theme/spacings';
import { NavigationBarSearchProps } from './navigation-bar-search.types';

export const NavigationBarSearch = ({
  cancelOption,
  ...inputSearchProps
}: NavigationBarSearchProps) => {
  const [handlePress] = usePress({
    onPress: cancelOption?.onPress,
  });

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      paddingHorizontal="md"
      paddingVertical="xs"
    >
      <Box flex={1}>
        <InputSearch {...inputSearchProps} />
      </Box>
      {cancelOption ? (
        <Box marginLeft="md">
          <Pressable
            accessibilityLabel={cancelOption.text}
            accessibilityRole="button"
            onPress={handlePress}
            hitSlop={HIT_SLOP.small}
          >
            <Text variant="body" color="BLUKO_500">
              {cancelOption.text}
            </Text>
          </Pressable>
        </Box>
      ) : null}
    </Box>
  );
};
