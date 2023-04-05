import { ColorTheme } from '../../../theme';
import { IconsName } from '../../icon/icon.types';

export type CardHeaderProps = {
  /**
   * Header content.
   */
  header?: string;
  /**
   * The name of the icon to display on the top left corner
   */
  iconName?: IconsName;
  /**
   * The action trigger by the icon displayed on the top right corner
   */
  rightAction?: 'navigate';
  /**
   * The value displayed at the top right corner.
   */
  value?: string;
  /**
   * The colors of the card header elements.
   */
  colors: Colors;
  /**
   * Indicates if the card is in a loading state.
   */
  isLoading?: boolean;
};

type Colors = {
  /**
   * The color of the right icon.
   */
  rightIconColor: ColorTheme;
  /**
   * The color of the header text.
   */
  headerColor: ColorTheme;
  /**
   * The color of the left icon.
   */
  leftIconColor: ColorTheme;
  /**
   * The color of the value text.
   */
  valueColor: ColorTheme;
};
