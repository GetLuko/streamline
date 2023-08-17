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

  const skeletonItems: ButtonProps[] = Array(5)
    .fill(0)
    .map((_, index) => ({
      iconName: 'Area',
      text: `Skeleton${index}`,
      size: 'mini',
    }));

  const buttonMenu =
    buttons.length === 0 && isSkeleton ? skeletonItems : buttons;

  return (
    <ScrollView
      testID={testID ? `${testID}_container` : undefined}
      scrollEnabled={!isSkeleton}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: spacing.md, flexDirection: 'row' }}
    >
      {buttonMenu.map((button, index) => (
        <Box
          key={button.text}
          marginRight={
            buttons.length - 1 > index || isSkeleton ? 'xs' : undefined
          }
        >
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
