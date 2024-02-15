import React from 'react';

import { usePress } from '../../../../hooks/use-press.hook';
import { Icon } from '../../../../primitives/icon/icon';
import { ColorTheme } from '../../../../theme';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import Spinner from '../../../spinner/spinner';
import { DismissAction } from '../card-callout.types';

export const HeaderAction = ({
  color,
  dismissAction,
  isLoading,
}: {
  color: ColorTheme;
  dismissAction?: DismissAction;
  isLoading: boolean;
}) => {
  const [handlePress, isDismissing] = usePress({
    onPress: dismissAction?.onDismiss,
  });

  if (dismissAction) {
    return (
      <ButtonIcon
        accessibilityLabel={dismissAction.accessibilityLabel}
        appearance="dark"
        iconName="Cross"
        isLoading={isDismissing || isLoading}
        onPress={handlePress}
        withContainer
      />
    );
  }

  if (isLoading) {
    return <Spinner color={color} size="small" />;
  }

  return <Icon color={color} iconName="ChevronFarRight" size="regular" />;
};

export default HeaderAction;
