import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Text } from '../../../primitives/text/text';
import ListItemValue from '../list-item-value/list-item-value';
import ListItem from '../list-item/list-item';
import { ListItemGroupProps } from './list-item-group.types';
import { isListItemValueProps } from './list-item-group.utils';

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
        {items.map((props, index) => {
          const showDivider = index !== lastIndex;
          if (isListItemValueProps(props)) {
            return (
              <ListItemValue key={index} {...props} showDivider={showDivider} />
            );
          }
          return <ListItem key={index} {...props} showDivider={showDivider} />;
        })}
      </AnimatedBox>
      {description ? (
        <Text color="GREY_500" variant="caption" marginTop="xs">
          {description}
        </Text>
      ) : null}
    </>
  );
};
