import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { ListItemValueProps } from '../list-item-value.types';
import { RightContent } from './right-content';

export const CenterContent = ({
  isLoading,
  onPress,
  rightOption,
  title,
  value,
}: Pick<ListItemValueProps, 'onPress' | 'rightOption' | 'title' | 'value'> & {
  isLoading: boolean;
}) => {
  return (
    <Box flex={1} flexDirection="row" alignItems="center">
      <Box flex={1} minWidth="25%">
        <Text color="GREY_1000" variant="body">
          {title}
        </Text>
      </Box>
      <RightContent
        isLoading={isLoading}
        onPress={onPress}
        rightOption={rightOption}
        value={value}
      />
    </Box>
  );
};
