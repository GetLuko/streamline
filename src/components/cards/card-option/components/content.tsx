import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { CardOptionProps } from '../card-option.types';

type Props = Pick<CardOptionProps, 'description' | 'title'>;

export const Content = ({ description, title }: Props) => {
  return (
    <Box paddingVertical="md">
      <Text variant="titleSmallBold" color="GREY_1000">
        {title}
      </Text>
      {description ? (
        <Text
          paddingTop={description ? 'xxs' : undefined}
          variant="body"
          color="GREY_700"
        >
          {description}
        </Text>
      ) : null}
    </Box>
  );
};
