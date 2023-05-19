import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { ListItemValueProps } from '../list-item-value.types';
import { RightContent } from './right-content';

export const CenterContent = ({
  isDisabled,
  onPress,
  rightOption,
  title,
  value,
}: Pick<
  ListItemValueProps,
  'isDisabled' | 'onPress' | 'rightOption' | 'title' | 'value'
>) => {
  return (
    <Box flex={1} flexDirection="row" alignItems="center">
      <Box flex={1} minWidth="25%">
        <Text color={isDisabled ? 'GREY_500' : 'GREY_1000'} variant="body">
          {title}
        </Text>
      </Box>
      <RightContent
        isDisabled={isDisabled}
        onPress={onPress}
        rightOption={rightOption}
        value={value}
      />
    </Box>
  );
};
