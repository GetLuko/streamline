import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';

import { Box } from '../../primitives/box/box';
import { useStreamlineTheme } from '../../theme';
import { Button } from '../buttons/button/button';
import { ButtonProps } from '../buttons/button/button.types';

type Props = {
  buttons: Omit<ButtonProps, 'size'>[];
  isSkeleton?: boolean;
  testID?: string;
};

export const ButtonBar = ({ buttons, isSkeleton = false, testID }: Props) => {
  const styles = useStyles();

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
      testID={testID}
      scrollEnabled={!isSkeleton}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {buttonMenu.map((button, index) => (
        <Box
          key={button.text}
          marginRight={
            buttons.length - 1 > index || isSkeleton ? 'xs' : undefined
          }
        >
          <Button
            {...button}
            isSkeleton={isSkeleton}
            size="mini"
            testID={testID ? `${testID}-button-${index}` : undefined}
          />
        </Box>
      ))}
    </ScrollView>
  );
};

const useStyles = (): { [key: string]: ViewStyle } => {
  const { spacing } = useStreamlineTheme();
  return {
    container: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      flexDirection: 'row',
    },
  };
};

export default ButtonBar;
