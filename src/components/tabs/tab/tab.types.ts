export interface TabProps {
  appearance?: 'primary' | 'dark' | 'light';
  title: string;
  isSelected?: boolean;
  onPress: () => unknown;
}
