import { Box, CardCarousel } from '@getluko/streamline';
import React from 'react';

export const CardCarouselSandbox = () => {
  const Separator = () => <Box marginRight="xs" marginTop="md" />;

  return (
    <>
      <CardCarousel
        size="LG"
        title="Test title"
        description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
        backgroundColor="BLUKO_200"
        iconName="Backpack"
      />
      <Separator />
      <CardCarousel
        size="LG"
        title="Test title"
        description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
        backgroundColor="BLUKO_200"
        iconName="Backpack"
        isLoading
      />
      <Separator />

      <CardCarousel
        size="SM"
        title="Test title"
        backgroundColor="BLUKO_200"
        iconName="Backpack"
      />
      <Separator />

      <CardCarousel
        size="SM"
        title="Test title"
        backgroundColor="BLUKO_200"
        iconName="Backpack"
        isLoading
      />
      <Separator />

      <CardCarousel size="LG" isSkeleton />
      <Separator />

      <CardCarousel size="SM" isSkeleton />
    </>
  );
};

export default CardCarouselSandbox;
