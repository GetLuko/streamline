import React from 'react';
import { ScrollView } from 'react-native';

import { Box } from '../../primitives/box/box';
import { Skeleton } from '../../primitives/skeleton/skeleton';
import { Button } from '../buttons/button/button';
import { ButtonProps } from '../buttons/button/button.types';

type Props = {
  buttons: ButtonProps[];
  isSkeleton?: boolean;
};

export const ButtonsBar = ({ buttons, isSkeleton = false }: Props) => {
  return buttons.length === 0 || isSkeleton ? (
    <SkeletonButtonsBar />
  ) : (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Box padding="md" flexDirection="row">
        {buttons.map((button) => (
          <Box key={button.text} marginRight="md">
            <Button
              appearance="secondary"
              {...button}
              isSkeleton={isSkeleton}
            />
          </Box>
        ))}
      </Box>
    </ScrollView>
  );
};

const SkeletonButtonsBar = () => (
  <Box flexDirection="row" padding="md">
    <Box
      width={110}
      height={50}
      marginRight="md"
      backgroundColor="GREY_100"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="row"
      borderRadius="md"
    >
      <Skeleton shape="square" size="sm" />
      <Skeleton shape="row" size="md" percentage={60} />
    </Box>
    <Box
      width={110}
      marginRight="md"
      backgroundColor="GREY_100"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="row"
      borderRadius="md"
    >
      <Skeleton shape="square" size="sm" />
      <Skeleton shape="row" size="md" percentage={50} />
    </Box>
    <Box
      width={110}
      marginRight="md"
      backgroundColor="GREY_100"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="row"
      borderRadius="md"
    >
      <Skeleton shape="square" size="sm" />
      <Skeleton shape="row" size="md" percentage={50} />
    </Box>
    <Box
      width={110}
      marginRight="md"
      backgroundColor="GREY_100"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="row"
      borderRadius="md"
    >
      <Skeleton shape="square" size="sm" />
      <Skeleton shape="row" size="md" percentage={50} />
    </Box>
    <Box
      width={110}
      marginRight="md"
      backgroundColor="GREY_100"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="row"
      borderRadius="md"
    >
      <Skeleton shape="square" size="sm" />
      <Skeleton shape="row" size="md" percentage={50} />
    </Box>
  </Box>
);

export default ButtonsBar;
