import React from 'react';
import { ScrollView } from 'react-native';

import { Box } from '../../primitives/box/box';
import { useStreamlineTheme } from '../../theme';
import { Button } from '../buttons/button/button';
import { ButtonProps } from '../buttons/button/button.types';

type Props = {
  buttons: ButtonProps[];
  isSkeleton?: boolean;
  testID?: string;
};

export const ButtonBar = ({ buttons, isSkeleton = false, testID }: Props) => {
  const { spacing } = useStreamlineTheme();

  const skeletonItems: ButtonProps[] = [
    { iconName: 'Area', text: 'Skeleton', size: 'mini' },
    { iconName: 'Area', text: 'Skeleton', size: 'mini' },
    { iconName: 'Area', text: 'Skeleton', size: 'mini' },
    { iconName: 'Area', text: 'Skeleton', size: 'mini' },
    { iconName: 'Area', text: 'Skeleton', size: 'mini' },
  ];
  const buttonMenu = buttons.length > 0 ? buttons : skeletonItems;

  return (
    <ScrollView
      testID={testID ? `${testID}_container` : undefined}
      scrollEnabled={!isSkeleton}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: spacing.md, flexDirection: 'row' }}
    >
      {buttonMenu.map((button, index) => (
        <Box key={button.text} marginRight="md">
          <Button
            testID={testID ? `${testID}_button_${index}` : undefined}
            appearance="secondary"
            {...button}
            isSkeleton={isSkeleton}
          />
        </Box>
      ))}
    </ScrollView>
  );
};

export default ButtonBar;
