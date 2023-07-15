import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { getTextColors } from '../list-item-option.utils';
import { ListItemOptionProps } from '../list-item-option.types';

export const CenterContent = ({
  description,
  header,
  title,
  isDisabled = false,
  isSelected = false,
}: Pick<
  ListItemOptionProps,
  'description' | 'header' | 'title' | 'isDisabled' | 'isSelected'
>) => {
  const { titleColor, descriptionColor, headerColor } = getTextColors({
    isDisabled,
    selected: isSelected,
  });

  return (
    <Box flex={1} marginHorizontal="md">
      {header ? (
        <Text color={headerColor} variant="subBody">
          {header}
        </Text>
      ) : null}
      <Text color={titleColor} variant="bodyBold">
        {title}
      </Text>
      {description ? (
        <Text color={descriptionColor} variant="subBody">
          {description}
        </Text>
      ) : null}
    </Box>
  );
};

export default CenterContent;
