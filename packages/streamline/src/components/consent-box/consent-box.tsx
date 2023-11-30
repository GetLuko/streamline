import { FC } from 'react';
import { Pressable } from 'react-native';

import { Box } from '../../primitives/box/box';
import { MarkdownLink } from '../../primitives/markdown/markdown-link';
import Checkbox from '../checkbox/checkbox';
import { CheckboxProps } from '../checkbox/checkbox.types';
import { getConsentBoxColors } from './consent-box.utils';

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
  const { backgroundColor, textColor } = getConsentBoxColors({
    appearance,
    isDisabled,
    value,
  });

  const handleOnPress = () => {
    onChange?.(!value);
  };

  return (
    <Pressable testID={testID} onPress={handleOnPress} disabled={isDisabled}>
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
          <MarkdownLink bodyColor={textColor}>{text}</MarkdownLink>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ConsentBox;
