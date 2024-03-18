import { TabProps } from '../tab/tab.types';

export interface TabBarProps {
  appearance?: TabProps['appearance'];
  onTabSelected: (index: number) => unknown;
  tabIndex: number;
  tabs: string[];
}
