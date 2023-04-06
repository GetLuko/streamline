import React from 'react';

import { Icon } from '../../../../primitives/icon/icon';
import { ColorTheme } from '../../../../theme';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import { DismissAction } from '../card-callout.types';

export const HeaderAction = ({
  color,
  dismissAction,
}: {
  color: ColorTheme;
  dismissAction?: DismissAction;
}) => {
  if (dismissAction) {
    return (
      <ButtonIcon
        accessibilityLabel={dismissAction.accessibilityLabel}
        appearance="secondary"
        iconName="Cross"
        onPress={dismissAction.onDismiss}
        withContainer
      />
    );
  }
  return <Icon color={color} iconName="ChevronFarRight" size="regular" />;
};

export default HeaderAction;
