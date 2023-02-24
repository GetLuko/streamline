import { Box } from "../box/box";

export type CardProps = {
  onLongPress?: () => void;
  onPress?: (event: unknown) => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
  withShadow?: boolean;
  withPadding?: boolean;
  animated?: boolean;
} & React.ComponentProps<typeof Box>;
