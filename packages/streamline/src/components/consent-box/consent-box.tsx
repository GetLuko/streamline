import { FC } from 'react';
import { Pressable } from 'react-native';

import { Box } from '../../primitives/box/box';
import { Card } from '../../primitives/card/card';
import { Text } from '../../primitives/text/text';
import Checkbox from '../checkbox/checkbox';
import { CheckboxProps } from '../checkbox/checkbox.types';
import { getConsentBoxBackgroundColor } from './consent-box.utils';

type ConsentBoxProps = {
  text: string;
} & CheckboxProps;

export const ConsentBox: FC<ConsentBoxProps> = ({
  text,
  value,
  appearance = 'primary',
  isDisabled = false,
  onChange,
  testID,
}) => {
  const backgroundColor = getConsentBoxBackgroundColor({
    appearance,
    isDisabled,
    value,
  });

  const handleOnPress = () => {
    onChange?.(!value);
  };

  return (
    <Pressable testID={testID} onPress={handleOnPress}>
      <Box
        backgroundColor={backgroundColor}
        flexDirection="row"
        borderRadius="lg"
        padding="md"
        alignItems="center"
      >
        <Checkbox
          value={value}
          appearance={appearance}
          isDisabled={isDisabled}
          pointerEvents="none"
        />
        <Box flex={1} marginLeft="md">
          <Text variant="body" color="GREY_1000">
            {text}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ConsentBox;
