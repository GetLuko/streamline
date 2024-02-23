import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { usePress } from '../../../../hooks/use-press.hook';
import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import { ListItemSelectableProps } from '../list-item-selectable.type';
import Tag from '../../../tag/tag';

export const RightContent = ({
  rightOption,
  value,
}: Pick<ListItemSelectableProps, 'onPress' | 'rightOption' | 'value'>) => {
  const styles = useStyles();
  const isTag = rightOption?.type === 'tag';

  const [handlePress, isResolving] = usePress({
    onPress: !isTag ? rightOption?.onPress : undefined,
  });

  if (rightOption) {
    if (isTag) {
      return (
        <Box position="absolute" paddingRight="xs" paddingLeft="xxs" right={0}>
          <Tag
            accessibilityLabel={rightOption.accessibilityLabel}
            appearance={rightOption.appearance}
            iconName={rightOption.iconName}
            text={rightOption.text}
          />
        </Box>
      );
    }

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
  }

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

const useStyles = (): {
  text: StyleProp<TextStyle>;
} => ({
  text: {
    maxWidth: '60%',
  },
});
