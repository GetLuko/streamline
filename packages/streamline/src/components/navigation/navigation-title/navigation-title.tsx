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
}: NavigationTitleProps) => {
  const { titleColor, headerColor, valueColor, headerOpacity, valueOpacity } =
    getNavigationTitleColors(appearance);

  return (
    <Box
      paddingHorizontal="md"
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
      <Box alignItems="center" flex={1} flexDirection="row">
        <Text
          variant="titleLargeBold"
          accessibilityLabel={header}
          accessibilityRole="header"
          style={{ flex: 1 }}
          color={titleColor}
          textAlign={position}
          numberOfLines={4}
        >
          {title}
        </Text>

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
          numberOfLines={4}
        >
          {value}
        </Text>
      ) : null}
    </Box>
  );
};

export default NavigationTitle;
