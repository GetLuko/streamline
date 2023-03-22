import { IconsName } from '../../../../primitives/icon/icon.types';
import React from 'react';
import { ViewProps, StyleProp, ViewStyle } from 'react-native';
import { Icon } from '../../../../primitives/icon/icon';
import { Size } from '../../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../../theme';
import { Box } from '../../../../primitives/box/box';

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
  loading?: boolean;
  forceTextInputFocus?: boolean;
  onPress?: () => void;
  pointerEvents?: ViewProps['pointerEvents'];
}

const getConfig = ({
  disabled,
  loading,
  name,
}: {
  disabled?: boolean;
  loading: boolean;
  name: string;
}) => {
  let color: ColorTheme = 'BLUKO_500';
  let size: Size = 'regular';
  let extraStyle: StyleProp<ViewStyle>;

  if (disabled) {
    color = 'GREY_500';
  }
  if (name === 'ChevronDown') {
    color = 'GREY_400';
    size = 'regular';
    extraStyle = { paddingTop: 4 };
  }
  if (name === 'ChevronDown' && disabled) {
    color = 'GREY_300';
  }
  if (loading) {
    color = 'BLUKO_500';
    size = 'regular';
  }
  return { color, size, extraStyle };
};

export default function InputTextIcon({
  name,
  forceTextInputFocus,
  onPress,
  pointerEvents,
  loading = false,
}: Props) {
  const { isTextInputFocused, forceFocus, disabled } =
    React.useContext(StyleContext);

  const onPressWithFocusControl = React.useCallback(() => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }
    onPress?.();
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);

  const config = getConfig({ disabled, loading, name });
  return (
    <Box
      paddingLeft="xs"
      paddingTop="xxs"
      style={config.extraStyle}
      pointerEvents={pointerEvents}
    >
      <Icon
        iconName={name}
        color={config.color}
        onPress={disabled ? undefined : onPressWithFocusControl}
        size={config.size}
        isLoading={loading}
        testID={loading ? 'input-text-icon-loading' : 'input-text-icon-' + name}
      />
    </Box>
  );
}
