import { Box } from '../../../primitives/box/box';
import { Switch } from '../../switch/switch';
import { Divider } from '../components/divider';
import { ListItemSkeleton } from '../components/list-item-skeleton';
import { CenterContent } from '../list-item/components/center-content';
import { LeftContent } from '../list-item/components/left-content';
import {
  BACKGROUND_COLOR,
  DIVIDER_VERTICAL_MARGIN,
} from '../list-items.constants';

import { ListItemSwitchProps } from './list-item-switch.types';

export const ListItemSwitch = ({
  accessibilityLabel,
  description,
  header,
  iconName,
  isSkeleton,
  showDivider,
  switchOption,
  testID,
  title,
}: ListItemSwitchProps) => {
  if (isSkeleton) {
    return <ListItemSkeleton />;
  }

  const dividerLeftSpacing = iconName ? 40 : 0;

  return (
    <Box
      accessibilityLabel={
        accessibilityLabel ?? `${header}\n${title}\n${description}`
      }
      accessibilityRole="none"
      testID={testID}
      alignItems="center"
      backgroundColor={BACKGROUND_COLOR}
      flexDirection="row"
      paddingVertical="md"
      paddingLeft="md"
    >
      <LeftContent iconName={iconName} isLoading={false} color="BLUKO_500" />
      <Box flex={1}>
        <CenterContent
          description={description}
          header={header}
          title={title}
          mainTextColor="GREY_1000"
          secondaryTextColor="GREY_700"
        />
      </Box>
      <Box paddingRight="md">
        <Switch {...switchOption} />
      </Box>
      {showDivider ? (
        <Divider
          position="absolute"
          right={DIVIDER_VERTICAL_MARGIN}
          bottom={0}
          left={DIVIDER_VERTICAL_MARGIN + dividerLeftSpacing}
        />
      ) : null}
    </Box>
  );
};
