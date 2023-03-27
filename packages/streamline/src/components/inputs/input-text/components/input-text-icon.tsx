import { IconsName } from '../../../../primitives/icon/icon.types';
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
}) => {
  let color: ColorTheme = 'BLUKO_500';
  let extraStyle: StyleProp<ViewStyle>;
  if (disabled) {
    color = 'GREY_500';
  }
  if (name === 'ChevronDown') {
    color = 'GREY_400';
    extraStyle = { paddingTop: 4 };
  }
  if (name === 'ChevronDown' && disabled) {
    color = 'GREY_300';
  }
  return { color, extraStyle };
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
          size="large"
          testID={'input-text-icon-' + name}
        />
      </TouchableOpacity>
    </Box>
  );
}
