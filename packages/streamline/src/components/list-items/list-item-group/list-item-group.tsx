import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Text } from '../../../primitives/text/text';
import { Item } from './components/item';
import { ListItemGroupProps } from './list-item-group.types';

export const ListItemGroup = ({
  description,
  items,
  title,
}: ListItemGroupProps) => {
  const lastIndex = items.length - 1;

  return (
    <>
      {title ? (
        <Text color="GREY_1000" variant="titleSmallBold" marginBottom="xs">
          {title}
        </Text>
      ) : null}
      <AnimatedBox borderRadius="lg" overflow="hidden">
        {items.map((props, index) => (
          <Item key={index} {...props} showDivider={index !== lastIndex} />
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
