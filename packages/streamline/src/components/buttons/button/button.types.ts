import { InteractionType } from '../../../';
import { PressableProps } from 'react-native';
import { SmallIconName } from '../../../primitives/icon/icon.types';
import { Appearance } from '../../../theme/appearance';

export type ButtonProps = Pick<InteractionType, 'isLoading' | 'isDisabled'> & {
  /**
   * The text to display. Upper first char automaticaly.
   */
  text: string;
  /**
   * Whether the button is touched.
   */
  isTouched?: boolean;
  /**
   * When present, informs accessible tools if the element is busy
   */
  isBusy?: boolean;
  /**
   * The variant of the button. Can be one of `primary`, `secondary`, `danger`, `neutral`.
   */
  appearance?: Appearance;
  /**
   * The type of the button. Can be one of `full` or `mini`.
   */
  size?: 'full' | 'mini';
  /**
   * The name of the icon to display. Button support only small icon. Button type "Full" don't support icon.
   */
  iconName?: SmallIconName;
  /**
   * The delay in ms before the onPress callback is called.
   */
  debounceDelay?: number; // use ??
  /**
   * Display as a Skeleton.
   */
  isSkeleton?: boolean;

  /**
   * Display with a box shadow to have a floating style.
   */
  isFloating?: boolean;
} & Pick<
    PressableProps,
    | 'pointerEvents'
    | 'accessibilityLabel'
    | 'accessibilityRole'
    | 'onPress'
    | 'onPressIn'
    | 'onPressOut'
    | 'testID'
  >;
