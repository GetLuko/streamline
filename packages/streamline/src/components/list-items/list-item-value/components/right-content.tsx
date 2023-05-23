import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { RightContent as FarRightContent } from '../../list-item/components/right-content';
import { ListItemValueProps } from '../list-item-value.types';

export const RightContent = ({
  isDisabled,
  onPress,
  rightOption,
  value,
}: Pick<
  ListItemValueProps,
  'isDisabled' | 'onPress' | 'rightOption' | 'value'
>) => {
  const styles = useStyles();

  return (
    <>
      <Text
        color={isDisabled ? 'GREY_500' : 'GREY_1000'}
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

const useStyles = () => ({
  text: {
    maxWidth: '60%',
  },
});
