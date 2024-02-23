import { InputSearchProps } from '../../inputs/input-search/input-search';

export interface NavigationBarSearchProps extends InputSearchProps {
  cancelOption?: {
    text: string;
    onPress: () => unknown;
  };
}
