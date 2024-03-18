import { CardProps } from '../../../primitives/card/card.types';
import { IconsName } from '../../../types';
import { ButtonIconProps } from '../../buttons/button-icon/button-icon.types';
import { SwitchProps } from '../../switch/switch';

export type CardOptionProps = Pick<
  CardProps,
  'accessibilityLabel' | 'testID' | 'onPress' | 'onPressIn' | 'onPressOut'
> & {
  title?: string;
  header?: string;
  iconName?: IconsName;
  rightOption?: Pick<
    ButtonIconProps,
    'accessibilityLabel' | 'iconName' | 'onPress'
  >;
  value?: string;
  isLoading?: boolean;
  description?: string;
  isBusy?: boolean;
  isSkeleton?: boolean;
  switchOption: SwitchProps & {
    isLoadingLabel?: boolean;
    label: string;
  };
};
