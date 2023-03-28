import { IconsName, Size } from '../../../../primitives/icon/icon.types';
import React from 'react';
import { ViewProps, StyleProp, ViewStyle } from 'react-native';
import { Icon } from '../../../../primitives/icon/icon';
import { ColorTheme } from '../../../../theme';
import { Box } from '../../../../primitives/box/box';
import { TouchableOpacity } from 'react-native';

type StyleContextType = {
  isTextInputFocused: boolean;
  forceFocus: () => void;
  disabled?: boolean;
};

const StyleContext = React.createContext<StyleContextType>({
  isTextInputFocused: false,
  forceFocus: () => undefined,
});

export const IconAdornment: React.FunctionComponent<
  {
    icon: React.ReactNode;
  } & Omit<StyleContextType, 'style'>
> = ({ icon, isTextInputFocused, forceFocus, disabled }) => {
  const contextState = { isTextInputFocused, forceFocus, disabled };

  return (
    <StyleContext.Provider value={contextState}>{icon}</StyleContext.Provider>
  );
};

interface Props {
  name: IconsName;
  disabled?: boolean;
  forceTextInputFocus?: boolean;
  onPress?: () => void;
  pointerEvents?: ViewProps['pointerEvents'];
}

const getConfig = ({
  disabled,
  name,
}: {
  disabled?: boolean;
  name: string;
}): { color: ColorTheme; extraStyle?: StyleProp<ViewStyle>; size?: Size } => {
  if (disabled) {
    return { color: 'GREY_500', size: 'large' };
  }
  if (name === 'ChevronDown') {
    return { color: 'GREY_400', extraStyle: { paddingTop: 4 }, size: 'large' };
  }
  if (name === 'ChevronDown' && disabled) {
    return { color: 'GREY_300', size: 'regular' };
  }
  return { color: 'BLUKO_500', size: 'large' };
};

export default function InputTextIcon({
  name,
  forceTextInputFocus,
  onPress,
  pointerEvents,
}: Props) {
  const { isTextInputFocused, forceFocus, disabled } =
    React.useContext(StyleContext);

  const onPressWithFocusControl = React.useCallback(() => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }
    onPress?.();
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);

  const config = getConfig({ disabled, name });
  return (
    <Box
      paddingLeft="xs"
      paddingTop="xxs"
      style={config.extraStyle}
      pointerEvents={pointerEvents}
    >
      <TouchableOpacity
        accessibilityRole="button"
        onPress={disabled ? undefined : onPressWithFocusControl}
      >
        <Icon
          iconName={name}
          color={config.color}
          size={config.size}
          testID={'input-text-icon-' + name}
        />
      </TouchableOpacity>
    </Box>
  );
}
