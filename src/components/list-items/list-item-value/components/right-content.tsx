import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { ColorTheme } from '../../../../theme';
import { RightContent as FarRightContent } from '../../list-item/components/right-content';
import { ListItemValueProps } from '../list-item-value.types';

export const RightContent = ({
  onPress,
  rightOption,
  value,
  valueTextColor,
}: { valueTextColor: ColorTheme } & Pick<
  ListItemValueProps,
  'onPress' | 'rightOption' | 'value'
>) => {
  const styles = useStyles();

  return (
    <>
      <Text
        color={valueTextColor}
        marginLeft="xs"
        style={styles.text}
        textAlign="right"
        variant="bodyBold"
      >
        {value}
      </Text>
      <Box width={rightOption ? 48 : 40} />
      <Box
        position="absolute"
        paddingLeft={!rightOption ? 'xs' : undefined}
        paddingRight={rightOption ? 'xs' : 'md'}
        right={0}
      >
        <FarRightContent onPress={onPress} rightOption={rightOption} />
      </Box>
    </>
  );
};

const useStyles = (): {
  text: StyleProp<TextStyle>;
} => ({
  text: {
    maxWidth: '60%',
  },
});
