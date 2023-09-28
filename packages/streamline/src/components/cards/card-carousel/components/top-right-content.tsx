import React from 'react';

import { usePress } from '../../../../hooks/use-press.hook';
import { Box } from '../../../../primitives/box/box';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import { CardCarouselProps } from '../card-carousel.types';

type TopRightContentProps = Pick<
  CardCarouselProps,
  'dismissAction' | 'isLoading'
> & { testID?: string };

const TopRightContent = ({
  dismissAction,
  isLoading,
  testID,
}: TopRightContentProps) => {
  const [handleOnDismiss, isDismissing] = usePress({
    onPress: dismissAction?.onDismiss,
  });
  return (
    <Box>
      {dismissAction || isLoading ? (
        <ButtonIcon
          testID={`${testID}-close-button`}
          isLoading={isDismissing || isLoading}
          iconName="Cross"
          accessibilityLabel={dismissAction?.accessibilityLabel ?? ''}
          appearance="light"
          onPress={handleOnDismiss}
          withContainer
        />
      ) : null}
    </Box>
  );
};

export default TopRightContent;
