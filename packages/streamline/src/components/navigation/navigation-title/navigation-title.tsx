import { Box } from '../../../primitives/box/box';
import { IconsName } from '../../../primitives/icon/icon.types';
import { Text } from '../../../primitives/text/text';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import { getNavigationTitleColors } from './navigation-title.utils';

export interface NavigationTitleProps {
  appearance?: 'dark' | 'light';
  position?: 'left' | 'center';
  title: string;
  header?: string;
  value?: string;
  icon?: IconsName;
  onIconPress?: () => void;
  buttonIconAccessibilityLabel?: string;
  titleNumberOfLines?: number;
}

export const NavigationTitle = ({
  appearance = 'dark',
  position = 'left',
  title,
  header,
  value,
  icon,
  onIconPress,
  buttonIconAccessibilityLabel,
  titleNumberOfLines,
}: NavigationTitleProps) => {
  const { titleColor, headerColor, valueColor, headerOpacity, valueOpacity } =
    getNavigationTitleColors(appearance);

  return (
    <Box
      paddingVertical="xs"
      alignItems={position === 'left' ? 'flex-start' : 'center'}
    >
      {header ? (
        <Text
          variant="headlineBold"
          marginBottom="xs"
          accessibilityLabel={header}
          accessibilityRole="text"
          color={headerColor}
          opacity={headerOpacity}
          textAlign={position}
          numberOfLines={4}
        >
          {header}
        </Text>
      ) : null}
      <Box alignItems="center" flexDirection="row">
        <Box flex={1}>
          <Text
            variant="titleLargeBold"
            accessibilityLabel={header}
            accessibilityRole="header"
            color={titleColor}
            textAlign={position}
            numberOfLines={titleNumberOfLines}
          >
            {title}
          </Text>
        </Box>

        {icon && position !== 'center' ? (
          <ButtonIcon
            accessibilityLabel={buttonIconAccessibilityLabel || icon}
            iconName={icon}
            onPress={onIconPress}
            size="large"
            appearance={appearance === 'dark' ? 'primary' : 'light'}
          />
        ) : null}
      </Box>
      {value ? (
        <Text
          variant="headlineBold"
          marginTop="xs"
          accessibilityLabel={header}
          accessibilityRole="text"
          color={valueColor}
          opacity={valueOpacity}
          textAlign={position}
        >
          {value}
        </Text>
      ) : null}
    </Box>
  );
};

export default NavigationTitle;
