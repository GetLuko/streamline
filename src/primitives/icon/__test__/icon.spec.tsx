import { render } from '@testing-library/react-native';
import React from 'react';
import { Path } from 'react-native-svg';

import { Icon } from '../icon';

describe('Icon', () => {
  const extractColorFromReactNode = (
    component: React.ReactElement<
      any,
      string | React.JSXElementConstructor<any>
    >
  ) => {
    const { UNSAFE_getByType } = render(component);
    const root = UNSAFE_getByType(Path);

    return root.props.fill;
  };

  it('use the correct default color', () => {
    const color = extractColorFromReactNode(
      <Icon iconName="Heart" size="regular" />
    );
    expect(color).toStrictEqual('#2D50E6');
  });

  it('use the correct <color> with the prop color', () => {
    const color = extractColorFromReactNode(
      <Icon iconName="Heart" size="regular" color="TERRA_500" />
    );
    expect(color).toStrictEqual('#2D50E6');
  });
});
