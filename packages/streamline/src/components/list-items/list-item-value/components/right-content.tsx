import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { RightContent as FarRightContent } from '../../list-item/components/right-content';
import { ListItemValueProps } from '../list-item-value.types';

export const RightContent = ({
  isLoading,
  onPress,
  rightOption,
  value,
}: Pick<ListItemValueProps, 'onPress' | 'rightOption' | 'value'> & {
  isLoading: boolean;
}) => {
  const styles = useStyles();

  return (
    <>
      <Text
        marginLeft="xs"
        variant="bodyBold"
        textAlign="right"
        style={styles.text}
      >
        {value}
      </Text>
      <Box width={rightOption ? 48 : 40} />
      <Box
        position="absolute"
        right={0}
        paddingLeft={!rightOption ? 'xs' : undefined}
        paddingRight={rightOption ? 'xs' : 'md'}
      >
        <FarRightContent
          isLoading={isLoading}
          onPress={onPress}
          rightOption={rightOption}
        />
      </Box>
    </>
  );
};

const useStyles = () => ({
  text: {
    maxWidth: '60%',
  },
});
