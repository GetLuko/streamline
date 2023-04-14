import React from 'react';
import { Text } from '../../text/text';
import { hasValidDescription, hasValidTitle } from './card-content-utils';
import { CardContentProps } from './card-content.types';

export const CardContent = (props: CardContentProps) => {
  const { title, description, colors } = props;

  const hasTitle = hasValidTitle(title);
  const hasDescription = hasValidDescription(description);

  return (
    <>
      {hasTitle && (
        <Text
          paddingBottom={hasDescription ? 'xxs' : undefined}
          variant="titleMediumBold"
          color={colors?.titleColor}
        >
          {title}
        </Text>
      )}
      {hasDescription && (
        <Text variant="bodyBold" color={colors?.descriptionColor}>
          {description}
        </Text>
      )}
    </>
  );
};
