import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface WrapperProps {
  children: ReactElement;
  wrapper: (
    children: ReactElement,
    style?: StyleProp<ViewStyle>
  ) => ReactElement;
  condition?: boolean;
  defaultWrapper?: (
    children: ReactElement,
    style?: StyleProp<ViewStyle>
  ) => ReactElement;
  style?: StyleProp<ViewStyle>;
}

// Conditionnaly wrap a component with another one (like Touchable)
const Wrapper = ({
  children,
  condition,
  wrapper,
  defaultWrapper,
  style,
}: WrapperProps) =>
  condition
    ? wrapper(children, style)
    : defaultWrapper
    ? defaultWrapper(children, style)
    : children;

export default Wrapper;
