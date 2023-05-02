import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Text } from '../../../primitives/text/text';
import ListItem from '../list-item/list-item';
import { ListItemGroupProps } from './list-item-group.types';

export const ListItemGroup = ({
  description,
  items,
  title,
}: ListItemGroupProps) => {
  const lastIndex = items.length;

  return (
    <>
      {title ? (
        <Text color="GREY_1000" variant="titleSmallBold" marginBottom="xs">
          {title}
        </Text>
      ) : null}
      <AnimatedBox borderRadius="lg" overflow="hidden">
        {items.map((props, index) => (
          <ListItem key={index} {...props} showDivider={index !== lastIndex} />
        ))}
      </AnimatedBox>
      {description ? (
        <Text color="GREY_500" variant="caption" marginTop="xs">
          {description}
        </Text>
      ) : null}
    </>
  );
};
