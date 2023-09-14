import React from 'react';

import { usePress } from '../../../../hooks/use-press.hook';
import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import { ListItemSelectableProps } from '../list-item-selectable.type';

export const RightContent = ({
  rightOption,
  value,
}: Pick<ListItemSelectableProps, 'onPress' | 'rightOption' | 'value'>) => {
  const styles = useStyles();
  const [handlePress, isResolving] = usePress({
    onPress: rightOption?.onPress,
  });
  if (rightOption)
    return (
      <Box position="absolute" paddingRight="xs" right={0}>
        <ButtonIcon
          testID={`${rightOption.testID}-info-button`}
          accessibilityLabel={rightOption.accessibilityLabel}
          appearance="neutral"
          iconName={rightOption.iconName}
          onPress={handlePress}
          isLoading={isResolving}
          size="large"
        />
      </Box>
    );

  return (
    <Text
      marginLeft="xs"
      style={styles.text}
      textAlign="right"
      variant="bodyBold"
      marginRight="md"
    >
      {value}
    </Text>
  );
};

const useStyles = () => ({
  text: {
    maxWidth: '60%',
  },
});
