import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import Tag from '../../../tag/tag';
import {
  LargeCardCarouselProps,
  SmallCardCarouselProps,
} from '../card-carousel.types';

type TopLeftContentProps =
  | Pick<SmallCardCarouselProps, 'size' | 'iconName'>
  | Pick<LargeCardCarouselProps, 'size' | 'tag'>;
const TopLeftContent = (props: TopLeftContentProps) => {
  const isSmall = props.size === 'small';

  return (
    <Box>
      {isSmall && props.iconName ? (
        <Icon size="large" iconName={props.iconName} color="PURE_WHITE_1000" />
      ) : null}

      {!isSmall && props.tag ? (
        <Tag
          text={props.tag.text}
          iconName={props.tag.iconName}
          appearance="dark"
        />
      ) : null}
    </Box>
  );
};

export default TopLeftContent;
