import { CardCarousel } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const docs = [
  <CardCarousel
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Backpack', iconName: 'Backpack' }}
    media="https://legacy.reactjs.org/logo-og.png"
  />,

  <CardCarousel
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Backpack', iconName: 'Backpack' }}
    media="https://legacy.reactjs.org/logo-og.png"
    isLoading
  />,

  <CardCarousel size="large" isSkeleton />,
  <CardCarousel
    size="small"
    title="Test title"
    iconName="Backpack"
    media="https://legacy.reactjs.org/logo-og.png"
  />,
  <CardCarousel
    size="small"
    title="Test title"
    iconName="Backpack"
    isLoading
    media="https://legacy.reactjs.org/logo-og.png"
  />,
  <CardCarousel size="small" isSkeleton />,
];

export const CardCarouselSandbox = () => <DocList docs={docs} />;

export default CardCarouselSandbox;
