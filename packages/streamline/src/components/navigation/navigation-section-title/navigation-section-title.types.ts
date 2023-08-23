import { SwitchProps } from '../../switch/switch';

type ActionProps = {
  testID?: string;
  title: string;
  onPress?: () => void;
};

type RightComponent =
  | ({
      type: 'switch';
    } & SwitchProps)
  | ({
      type: 'action';
    } & ActionProps);

export type NavigationSectionTitleProps = {
  title: string;
  description?: string;
  rightComponent?: RightComponent;
};
